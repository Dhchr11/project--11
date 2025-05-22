import React, { useEffect, useState } from "react";
import Aheader from "../Common/Aheader";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";

function Dashboard1() {
  const [about, setAbout] = useState([]);
  const [view, setView] = useState({
    id: "",
    img: "",
    title: "",
    subtitle: ""
  });

  const [editData, setEditData] = useState(null);
  const [update, setUpdateData] = useState({
    id: "",
    img: "",
    title: "",
    subtitle: "",
    name: "",
    description: "",
    day: "",
    Time: ""
  });

  // Save data to edit
  const saveData = (data) => {
    setEditData(data);
    setUpdateData(data);
  };

  // View data
  const getView = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3001/aboutcard/${id}`);
      setView(res.data);
      const modal = new window.bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      modal.show();
    } catch (error) {
      console.error("Error fetching view data");
    }
  };

  // Fetch all about data
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/aboutcard");
      setAbout(res.data);
    } catch (error) {
      console.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3001/aboutcard/${update.id}`,
        update
      );
      console.log(res.data);
      fetchData();
      toast.success("Course updated successfully");
      setEditData(null);
    } catch (error) {
      console.log("Error updating course", error);
    }
  };

  // Delete record
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3001/aboutcard/${id}`);
      console.log(res.data);
      fetchData();
    } catch (error) {
      console.log("Error deleting data", error);
    }
  };

  return (
    <>
      <Aheader />
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {about.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.img}
                  alt={item.title}
                  width="50"
                  height="50"
                />
              </td>
              <td>{item.title}</td>
              <td>{item.subtitle}</td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => getView(item.id)}
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-info mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  onClick={() => saveData(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item.id)}
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
              <h5 className="modal-title">Course Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="team-item">
                 <div className="team-img">
                          <img
                            src={view.img}
                            className="img-fluid w-100 "
                            style={{ height: "300px" }}
                            alt="Image"
                          />
                          <div className="team-icon d-flex p-4 gap-2">
                            <a
                              href="#"
                              className="btn btn-primary btn-sm-square"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-primary btn-sm-square"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-primary btn-sm-square"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                            <a
                              href="#"
                              className="btn btn-primary btn-sm-square"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                        <div className="team-content">
                          <h4>{view.title}</h4>
                          <p className="mb-0">{view.subtitle}</p>
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

      {/* Edit/Update Modal */}
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
              <h5 className="modal-title">Update about</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body bg-info">
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label>Image URL</label>
                  <input
                    type="url"
                    className="form-control"
                    value={update.img}
                    onChange={(e) =>
                      setUpdateData({ ...update, img: e.target.value })
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
                      setUpdateData({ ...update, title: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>Subtitle</label>
                  <input
                    type="text"
                    className="form-control"
                    value={update.subtitle}
                    onChange={(e) =>
                      setUpdateData({ ...update, subtitle: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                 
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

export default Dashboard1;
