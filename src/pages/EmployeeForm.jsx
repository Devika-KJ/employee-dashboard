import { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Employee form submitted successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center fw-bold mb-4">
                Employee Form
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter employee name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Designation</label>
                  <input
                    type="text"
                    name="designation"
                    className="form-control"
                    placeholder="Enter designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    className="form-control"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Salary</label>
                  <input
                    type="number"
                    name="salary"
                    className="form-control"
                    placeholder="Enter salary"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;