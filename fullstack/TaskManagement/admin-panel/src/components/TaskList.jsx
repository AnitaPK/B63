import React, { useEffect, useState } from "react";
import { showAllTasks } from "../api/taskAPI";
import { toast } from "react-toastify";
import AssignTaskModal from './AssignTaskModal'
import { getAllUserList } from "../api/userAPI";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
 const [showModal, setShowModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
const [users, setUsers] = useState([]);

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
    const fetchUsers = async () => {
    try {
      const res = await getAllUserList();
      setUsers(res.data.users || []);
    } catch {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchData();
    fetchUsers()
  }, []);

  const openAssignModal = (taskId) => {
    setSelectedTaskId(taskId);
    setShowModal(true);
  };


  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <>
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
                <th>Action</th>
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
                        ${task.status === "Completed"
                          ? "bg-success"
                          : task.status === "InProgress"
                          ? "bg-warning"
                          : "bg-secondary"
                        }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td>{task.priority}</td>
                  <td>{new Date(task.startDate).toLocaleDateString() || "-"}</td>
                  <td>{new Date(task.endDate).toLocaleDateString() || "-"}</td>
                  <td><button 
                    onClick={() => openAssignModal(task.id)}
                  >Assign to user</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
    <AssignTaskModal
        show={showModal}
        onClose={() => setShowModal(false)}
        taskId={selectedTaskId}
        users={users}
        openAssignModal={openAssignModal}
      />
      </>
  );
};

export default TaskList;
