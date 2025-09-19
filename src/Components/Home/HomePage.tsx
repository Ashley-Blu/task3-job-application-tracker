import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { getJobs, saveJob } from "../../utils/localStorage";

export const HomePage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalJob, setModalJob] = React.useState<any | null>(null);

  const handleViewDetails = (job: any) => {
    setModalJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalJob(null);
  };
  const [editingId, setEditingId] = React.useState<number | null>(null);
  const [editData, setEditData] = React.useState({
    company: "",
    status: "",
    address: "",
    contact: "",
    duties: "",
    requirements: "",
    notes: "",
  });

  const handleEditClick = (job: any) => {
    setEditingId(job.id);
    setEditData({
      company: job.company || "",
      status: job.status || "",
      address: job.address || "",
      contact: job.contact || "",
      duties: job.duties || "",
      requirements: job.requirements || "",
      notes: job.notes || "",
    });
  };

  const handleEditInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateJob = (id: number) => {
    const jobsList = getJobs().map((job: any) =>
      job.id === id
        ? {
            ...job,
            company: editData.company,
            status: editData.status,
            address: editData.address,
            contact: editData.contact,
            duties: editData.duties,
            requirements: editData.requirements,
            notes: editData.notes,
          }
        : job
    );
    localStorage.setItem("jobs", JSON.stringify(jobsList));
    setJobs(jobsList);
    setEditingId(null);
  };

  const handleDeleteJob = (id: number) => {
    const jobsList = getJobs().filter((job: any) => job.id !== id);
    localStorage.setItem("jobs", JSON.stringify(jobsList));
    setJobs(jobsList);
  };
  const navigate = useNavigate();
  const [jobs, setJobs] = React.useState(getJobs());
  const [formData, setFormData] = React.useState({
    company: "",
    status: "",
    address: "",
    contact: "",
    duties: "",
    requirements: "",
    notes: "",
  });
  const [showAddForm, setShowAddForm] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddJob = () => {
    setError("");
    if (!formData.company || !formData.status) {
      setError("Please fill in all required fields");
      return;
    }
    const newJob = {
      id: Date.now(),
      company: formData.company,
      status: formData.status,
      address: formData.address,
      contact: formData.contact,
      duties: formData.duties,
      requirements: formData.requirements,
      notes: formData.notes,
    };
    const updatedJobs = [...jobs, newJob];
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
    setFormData({
      company: "",
      status: "",
      address: "",
      contact: "",
      duties: "",
      requirements: "",
      notes: "",
    });
    setShowAddForm(false);
  };

  return (
    <div
      className="body"
      style={{
        minHeight: "80vh",
        alignItems: "flex-start",
        paddingTop: "40px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "32px", color: "222" }}>
          Jobs You've Applied For
        </h1>
        <div style={{ marginBottom: "32px" }}>
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              style={{
                padding: "10px 24px",
                borderRadius: "6px",
                border: "none",
                background: "#ef6960",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Add Job Application
            </button>
          ) : (
            <div
              style={{
                marginTop: "18px",
                background: "#f7f7f7",
                padding: "24px",
                borderRadius: "12px",
                maxWidth: "600px",
              }}
            >
              <h2>Add Job Application</h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label htmlFor="company">Company Name:</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="e.g. Tech Solutions Inc."
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px", width: "100%" }}
                />
                <label htmlFor="status">Status:</label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  placeholder="e.g. Interview Scheduled"
                  value={formData.status}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px", width: "100%" }}
                />
                <label htmlFor="address">Address:</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="e.g. 123 Main St, Cityville"
                  value={formData.address}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px", width: "100%" }}
                />
                <label htmlFor="contact">Contact Details:</label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="e.g. hr@techsolutions.com"
                  value={formData.contact}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px", width: "100%" }}
                />
                <label htmlFor="duties">Duties:</label>
                <textarea
                  id="duties"
                  name="duties"
                  placeholder="e.g. Develop and maintain web applications, collaborate with designers and backend engineers."
                  value={formData.duties}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px", width: "100%" }}
                />
                <label htmlFor="requirements">Requirements:</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  placeholder="e.g. React, TypeScript, CSS, 2+ years experience."
                  value={formData.requirements}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px", width: "100%" }}
                />
                <label htmlFor="notes">Additional Notes:</label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="e.g. Prepare portfolio for interview."
                  value={formData.notes}
                  onChange={handleInputChange}
                  style={{ marginBottom: "10px", width: "100%" }}
                />
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={handleAddJob}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "6px",
                    border: "none",
                    background: "#007bff",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "6px",
                    border: "none",
                    background: "#dc3545",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          )}
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {jobs.map((job: any) => (
            <li
              key={job.id}
              style={{
                marginBottom: "30px",
                background: "#f7f7f7",
                padding: "24px",
                borderRadius: "14px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "100%",
                maxWidth: "900px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {editingId === job.id ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <label htmlFor="edit-company">Company Name:</label>
                  <input
                    id="edit-company"
                    name="company"
                    type="text"
                    placeholder="e.g. Tech Solutions Inc."
                    value={editData.company}
                    onChange={handleEditInputChange}
                    style={{ marginBottom: "8px", width: "100%" }}
                  />
                  <label htmlFor="edit-status">Status:</label>
                  <input
                    id="edit-status"
                    name="status"
                    type="text"
                    placeholder="e.g. Interview Scheduled"
                    value={editData.status}
                    onChange={handleEditInputChange}
                    style={{ marginBottom: "8px", width: "100%" }}
                  />
                  <label htmlFor="edit-address">Address:</label>
                  <input
                    id="edit-address"
                    name="address"
                    type="text"
                    placeholder="e.g. 123 Main St, Cityville"
                    value={editData.address}
                    onChange={handleEditInputChange}
                    style={{ marginBottom: "8px", width: "100%" }}
                  />
                  <label htmlFor="edit-contact">Contact Details:</label>
                  <input
                    id="edit-contact"
                    name="contact"
                    type="text"
                    placeholder="e.g. hr@techsolutions.com"
                    value={editData.contact}
                    onChange={handleEditInputChange}
                    style={{ marginBottom: "8px", width: "100%" }}
                  />
                  <label htmlFor="edit-duties">Duties:</label>
                  <textarea
                    id="edit-duties"
                    name="duties"
                    placeholder="e.g. Develop and maintain web applications, collaborate with designers and backend engineers."
                    value={editData.duties}
                    onChange={handleEditInputChange}
                    style={{ marginBottom: "8px", width: "100%" }}
                  />
                  <label htmlFor="edit-requirements">Requirements:</label>
                  <textarea
                    id="edit-requirements"
                    name="requirements"
                    placeholder="e.g. React, TypeScript, CSS, 2+ years experience."
                    value={editData.requirements}
                    onChange={handleEditInputChange}
                    style={{ marginBottom: "8px", width: "100%" }}
                  />
                  <label htmlFor="edit-notes">Additional Notes:</label>
                  <textarea
                    id="edit-notes"
                    name="notes"
                    placeholder="e.g. Prepare portfolio for interview."
                    value={editData.notes}
                    onChange={handleEditInputChange}
                    style={{ marginBottom: "8px", width: "100%" }}
                  />
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      onClick={() => handleUpdateJob(job.id)}
                      style={{ marginRight: "8px" }}
                    >
                      Save
                    </button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <p style={{ margin: 0 }}>
                    <strong>Company:</strong> {job.company}
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Status:</strong> {job.status}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginTop: "10px",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button
                      onClick={() => handleViewDetails(job)}
                      style={{
                        padding: "10px 20px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#007bff",
                        color: "white",
                        cursor: "pointer",
                        fontWeight: "bold",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                      }}
                    >
                      View Details
                    </button>
                    {showModal && modalJob && (
                      <div
                        style={{
                          position: "fixed",
                          top: 0,
                          left: 0,
                          width: "100vw",
                          height: "100vh",
                          background: "rgba(0,0,0,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 1000,
                        }}
                      >
                        <div
                          style={{
                            background: "#fff",
                            padding: "32px",
                            borderRadius: "16px",
                            minWidth: "400px",
                            maxWidth: "600px",
                            boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                          }}
                        >
                          <h2 style={{ marginBottom: "18px" }}>Job Details</h2>
                          <p>
                            <strong>Company:</strong> {modalJob.company}
                          </p>
                          <p>
                            <strong>Status:</strong> {modalJob.status}
                          </p>
                          <p>
                            <strong>Address:</strong>{" "}
                            {modalJob.address || "N/A"}
                          </p>
                          <p>
                            <strong>Contact:</strong>{" "}
                            {modalJob.contact || "N/A"}
                          </p>
                          <p>
                            <strong>Duties:</strong> {modalJob.duties || "N/A"}
                          </p>
                          <p>
                            <strong>Requirements:</strong>{" "}
                            {modalJob.requirements || "N/A"}
                          </p>
                          <p>
                            <strong>Notes:</strong> {modalJob.notes || "N/A"}
                          </p>
                          <button
                            onClick={handleCloseModal}
                            style={{
                              marginTop: "18px",
                              padding: "10px 24px",
                              borderRadius: "6px",
                              border: "none",
                              background: "#007bff",
                              color: "white",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                    <button
                      onClick={() => handleEditClick(job)}
                      style={{
                        padding: "10px 20px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#ffc107",
                        color: "black",
                        cursor: "pointer",
                        fontWeight: "bold",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteJob(job.id)}
                      style={{
                        padding: "10px 20px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#ef6960",
                        color: "white",
                        cursor: "pointer",
                        fontWeight: "bold",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
