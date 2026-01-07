import React, { useEffect, useState } from "react";
import { assignTask } from "../api/taskAPI";
import { toast } from "react-toastify";

const AssignTaskModal = ({ show, onClose, taskId, users }) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (!show) {
      setUserId("");
    }
  }, [show]);

  const handleAssign = async () => {
    if (!userId) {
      toast.warning("Please select a user");
      return;
    }

    try {
      const res = await assignTask({ taskId, userId });
      if(res.data.success){
      toast.success("Task assigned successfully");
      onClose();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.msg || "Failed to assign task"
      );
    }
  };

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Assign Task</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              <label className="form-label">Select User</label>
              <select
                className="form-select"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              >
                <option value="">-- Select User --</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleAssign}>
                Assign
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default AssignTaskModal;
