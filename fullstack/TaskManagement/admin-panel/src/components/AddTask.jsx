import React, { useState } from "react";
import { createTask } from "../api/taskAPI";
import { toast } from "react-toastify";

const AddTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addNewTask = async (e) => {
    e.preventDefault();

    try {
      const response = await createTask(formData);
      toast.success(response.data.msg || "Task created successfully");

      // Reset form
      setFormData({
        title: "",
        description: "",
        status: "pending",
        priority: "medium",
        startDate: "",
        endDate: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.msg || "Error while creating task"
      );
    }
  };

  return (
    <div className="card shadow">
      <div className="card-header">
        <h5>Add New Task</h5>
      </div>

      <div className="card-body">
        <form onSubmit={addNewTask}>
          
          {/* Title */}
          <div className="mb-3">
            <label className="form-label">Title *</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Status */}
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Priority */}
          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Dates */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
