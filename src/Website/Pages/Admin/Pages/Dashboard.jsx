import React, { useEffect, useState } from "react";
import Aheader from "../Common/Aheader";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [view, setView] = useState({
    id: "",
    name: "",
    description: "",
    img: "",
    title: "",
    day: "",
    Time: "",
  });
  const [editdata, seteditdata] = useState(null);
  const [update, setupdatedata] = useState({
    id: "",
    name: "",
    description: "",
    img: "",
    title: "",
    day: "",
    Time: "",
  });

  // Save selected data for editing
  const savedata = (data) => {
    seteditdata(data);
    setupdatedata(data);
  };

  // View course details
  const getView = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3001/card/${id}`);
      setView(res.data);
      const modal = new window.bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      modal.show();
    } catch (error) {
      console.error("Error fetching view data");
    }
  };

  // Fetch course data
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/card");
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle update
  const handleupdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3001/card/${update.id}`,
        update
      );
      console.log(res.data);
      fetchData();
      toast.success("Course updated successfully");
      seteditdata(null);
    } catch (error) {
      console.log("Error updating course", error);
    }
  };
  //delete data
  const handledelete = async (id) => {
    const res = await axios.delete(`http://localhost:3001/card/${id}`);
    console.log(res.data);
    fetchData();
  };
  return (
    <>
      <Aheader />
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Time</th>
            <th>Title</th>
            <th>Day</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>
                <img
                  src={course.img}
                  alt={course.name}
                  width="50"
                  height="50"
                />
              </td>
              <td>{course.Time}</td>
              <td>{course.title}</td>
              <td>{course.day}</td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => getView(course.id)}
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  onClick={() => savedata(course)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handledelete(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>

      {/* View Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Course Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="courses-item">
                <div className="courses-item-inner p-4">
                  <div className="d-flex justify-content-between mb-4">
                    <div className="courses-icon-img p-3">
                      <img
                        src="img/icon-1.png"
                        className="img-fluid"
                        alt="icon"
                      />
                    </div>
                    <div className="data-info d-flex flex-column">
                      <div className="courses-trainer d-flex align-items-center mb-1">
                        <div className="me-2" style={{ width: 50, height: 50 }}>
                          <img src={view.img} className="img-fluid" alt="img" />
                        </div>
                        <p className="mb-0">{view.name}</p>
                      </div>
                      <div className="courses-date">
                        <p className="mb-1">Date: {view.day}</p>
                        <p className="mb-0">Time: {view.Time}</p>
                      </div>
                    </div>
                  </div>
                  <h4 className="mb-3">{view.title}</h4>
                  <p className="mb-4">{view.description}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Course</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body bg-info">
              <form onSubmit={handleupdate}>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={update.name}
                    onChange={(e) =>
                      setupdatedata({ ...update, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={update.description}
                    onChange={(e) =>
                      setupdatedata({ ...update, description: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>Image URL</label>
                  <input
                    type="url"
                    className="form-control"
                    value={update.img}
                    onChange={(e) =>
                      setupdatedata({ ...update, img: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={update.title}
                    onChange={(e) =>
                      setupdatedata({ ...update, title: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>Day</label>
                  <input
                    type="text"
                    className="form-control"
                    value={update.day}
                    onChange={(e) =>
                      setupdatedata({ ...update, day: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>Time</label>
                  <input
                    type="text"
                    className="form-control"
                    value={update.Time}
                    onChange={(e) =>
                      setupdatedata({ ...update, Time: e.target.value })
                    }
                  />
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-success" type="submit">
                    Update Data
                  </button>
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
