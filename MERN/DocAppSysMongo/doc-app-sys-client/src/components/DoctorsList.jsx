import React, { useEffect, useState } from "react";
import {
  appliedDodtorList,
  updateStatusDoctor,
} from "../api/doctorAPI";
import {getDoctorList} from '../api/userAPI'
import { toast } from "react-toastify";

const DoctorsList = () => {
  const [pendingDoctors, setPendingDoctors] = useState([]);
  const [approvedDoctors, setApprovedDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch pending doctor applications
  const fetchPendingDoctors = async () => {
    try {
      const res = await appliedDodtorList();
      if (res.data.success) {
        setPendingDoctors(res.data.doc);
      }
    } catch (error) {
      toast.error("Failed to load pending doctors");
    }
  };

  // 🔹 Fetch approved doctors
  const fetchApprovedDoctors = async () => {
    try {
      const res = await getDoctorList();
      if (res.data.success) {
        setApprovedDoctors(res.data.doc);
      }
    } catch (error) {
      toast.error("Failed to load doctors list");
    }
  };

  useEffect(() => {
    fetchPendingDoctors();
    fetchApprovedDoctors();
  }, []);

  // 🔹 Update doctor status
  const handleStatusUpdate = async (docId, status) => {
    try {
      setLoading(true);
      const res = await updateStatusDoctor(docId, { status });

      if (res.data.success) {
        toast.success(`Doctor ${status} successfully`);
        fetchPendingDoctors();
        fetchApprovedDoctors();
      }
    } catch (error) {
      toast.error("Status update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-primary">Doctors Management</h3>

      {/* ================= Pending Applications ================= */}
      <div className="card shadow mb-4">
        <div className="card-header bg-secondary text-dark fw-bold">
          Pending Doctor Applications
        </div>
        <div className="card-body table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Doctor ID</th>
                <th>Specialist</th>
                <th>Fees</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingDoctors.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No pending applications
                  </td>
                </tr>
              ) : (
                pendingDoctors.map((doc, index) => (
                  <tr key={doc._id}>
                    <td>{index + 1}</td>
                    <td>{doc.userID}</td>
                    <td>{doc.specialist}</td>
                    <td>₹ {doc.fees}</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        {doc.status}
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-success me-2"
                        disabled={loading}
                        onClick={() =>
                          handleStatusUpdate(doc._id, "Accept")
                        }
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        disabled={loading}
                        onClick={() =>
                          handleStatusUpdate(doc._id, "Reject")
                        }
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= Approved Doctors ================= */}
      <div className="card shadow">
        <div className="card-header bg-secondary text-white fw-bold">
          Approved Doctors
        </div>
        <div className="card-body table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {approvedDoctors.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No doctors found
                  </td>
                </tr>
              ) : (
                approvedDoctors.map((doc, index) => (
                  <tr key={doc._id}>
                    <td>{index + 1}</td>
                    <td>{doc.name}</td>
                    <td>{doc.email}</td>
                    <td>
                      <span className="badge bg-success">Approved</span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-outline-primary me-2">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        Disable
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
