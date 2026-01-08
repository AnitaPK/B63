import React, { useEffect, useState } from "react";
import { applyDoctor } from "../api/doctorAPI"; // adjust path if needed
import { getLoggedUser } from "../api/userAPI";
import { toast } from "react-toastify";

const ApplyDoctor = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    specialist: "",
    fees: "",
  });
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch logged-in user
  const fetchUser = async () => {
    try {
      const res = await getLoggedUser();
      if (res.data.success) {
        setUser(res.data.user);
      }
    } catch (error) {
      toast.error("Failed to load user info");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Submit doctor application
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.specialist || !formData.fees) {
      return toast.warning("All fields are required");
    }

    try {
      setLoading(true);
      const res = await applyDoctor(formData);

      if (res.data.success) {
        toast.success(res.data.msg);
        setFormData({ specialist: "", fees: "" });
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Apply Doctor</h3>

      {/* 🔹 User Info */}
      {user && (
        <div className="card mb-3 p-3">
          <h6>Logged in as</h6>
          <p className="mb-1"><strong>Name:</strong> {user.name}</p>
          <p className="mb-0"><strong>Email:</strong> {user.email}</p>
        </div>
      )}

      {/* 🔹 Apply Doctor Form */}
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <label className="form-label">Specialist</label>
          <input
            type="text"
            name="specialist"
            className="form-control"
            value={formData.specialist}
            onChange={handleChange}
            placeholder="e.g. Cardiologist"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Consultation Fees</label>
          <input
            type="number"
            name="fees"
            className="form-control"
            value={formData.fees}
            onChange={handleChange}
            placeholder="Enter fees"
          />
        </div>

        <button className="btn btn-primary" disabled={loading}>
          {loading ? "Applying..." : "Apply Doctor"}
        </button>
      </form>
    </div>
  );
};

export default ApplyDoctor;
