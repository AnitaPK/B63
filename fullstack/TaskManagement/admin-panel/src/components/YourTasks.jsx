import React, { useEffect, useState } from "react";
import { getTasksOfUser } from "../api/taskAPI";
import { toast } from "react-toastify";

const YourTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await getTasksOfUser();
      setTasks(res.data.assignedTasks || []);
    } catch (error) {
      toast.error(
        error.response?.data?.msg || "Failed to fetch your tasks"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading your tasks...</p>;
  }

  return (
    <div className="card shadow">
      <div className="card-header">
        <h5>Your Tasks</h5>
      </div>

      <div className="card-body">
        {tasks.length === 0 ? (
          <p className="text-center">No tasks assigned to you</p>
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
                <th>Assigned By</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.task?.title}</td>
                  <td>
                    <span
                      className={`badge 
                        ${item.task?.status === "completed"
                          ? "bg-success"
                          : item.task?.status === "in-progress"
                          ? "bg-warning"
                          : "bg-secondary"
                        }`}
                    >
                      {item.task?.status}
                    </span>
                  </td>
                  <td>{item.task?.priority}</td>
                  <td>{item.task?.startDate || "-"}</td>
                  <td>{item.task?.endDate || "-"}</td>
                  <td>
                    {item.assignedBy?.name} ({item.assignedBy?.role})
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default YourTasks;
