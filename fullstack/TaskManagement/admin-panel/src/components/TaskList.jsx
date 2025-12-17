import React, { useEffect, useState } from "react";
import { showAllTasks } from "../api/taskAPI";
import { toast } from "react-toastify";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await showAllTasks();
      setTasks(response.data.tasks || []);
    } catch (error) {
      toast.error(
        error.response?.data?.msg || "Failed to fetch tasks"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div className="card shadow">
      <div className="card-header">
        <h5>Task List</h5>
      </div>

      <div className="card-body">
        {tasks.length === 0 ? (
          <p className="text-center">No tasks found</p>
        ) : (
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>
                    <span
                      className={`badge 
                        ${task.status === "completed"
                          ? "bg-success"
                          : task.status === "in-progress"
                          ? "bg-warning"
                          : "bg-secondary"
                        }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td>{task.priority}</td>
                  <td>{task.startDate || "-"}</td>
                  <td>{task.endDate || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TaskList;
