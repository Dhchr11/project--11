import { Helmet } from "react-helmet";
import Footer from "../Comman/Footer";
import Header from "../Comman/Header";
import Display from "./Display";
import { useEffect, useState } from "react";
import axios from "axios";

function Course() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    const res = await axios.get("http://localhost:3001/card");
    // console.log(res.data);
    setCourse(res.data);
  };
  return (
    <div>
      <div>
        <Header />
        <Helmet>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
          <script src="lib/wow/wow.min.js"></script>
          <script src="lib/easing/easing.min.js"></script>
          <script src="lib/waypoints/waypoints.min.js"></script>
          <script src="lib/owlcarousel/owl.carousel.min.js"></script>
          <script src="js/main.js"></script>
          <link
            href="lib/owlcarousel/assets/owl.carousel.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="lib/animate/animate.min.css" />
          <link
            href="lib/owlcarousel/assets/owl.carousel.min.css"
            rel="stylesheet"
          />
        </Helmet>
        <Display title={"Our Course"} subtitle={"Course"} />
        <div
          className="container-fluid courses overflow-hidden py-5"
          style={{ marginBottom: 90 }}
        >
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary"> Our Courses</h4>
              <h1 className="display-4 text-white mb-4">
                Out Our Highlights Below
              </h1>
              <p className="text-white mb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur adipisci facilis cupiditate recusandae aperiam
                temporibus corporis itaque quis facere, numquam, ad culpa
                deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
              </p>
            </div>
            <div className="row gy-4 gx-0 justify-content-center">
              {course &&
                course.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-md-6 col-lg-4 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="courses-item">
                        <div className="courses-item-inner p-4">
                          <div className="d-flex justify-content-between mb-4">
                            <div className="courses-icon-img p-3">
                              <img
                                src="img/icon-1.png"
                                className="img-fluid"
                                alt="img"
                              />
                            </div>
                            <div className="data-info d-flex flex-column">
                              <div className="courses-trainer d-flex align-items-center mb-1">
                                <div
                                  className="me-2"
                                  style={{ width: 50, height: 50 }}
                                >
                                  <img
                                    src={item.img}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </div>
                                <p className="mb-0">{item.name}</p>
                              </div>
                              <div className="courses-date">
                                <p className="mb-1">Date: {item.day}</p>
                                <p className="mb-0">Time: {item.Time}</p>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="d-inline-block h4 mb-3">
                            {" "}
                            {item.title}
                          </a>
                          <p className="mb-4">{item.description}</p>
                          <a href="#" className="btn btn-primary py-2 px-4">
                            {" "}
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Course;
