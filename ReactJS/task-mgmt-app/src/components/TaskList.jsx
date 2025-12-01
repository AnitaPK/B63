import React, { useState } from "react";
import TaskForm from "./TaskForm";

export default function TaskList({ tasks, dispatch }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Task Manager</h2>

      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        ➕ Add New Task
      </button>

      {/* Task Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                No tasks available.
              </td>
            </tr>
          ) : (
            tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Bootstrap Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Task</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <TaskForm onSubmit={handleAddTask} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
