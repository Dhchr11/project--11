import React from "react";
import Header from "../Comman/Header";
import Footer from "../Comman/Footer";
import Display from "./Display";
import { Helmet } from "react-helmet";

function Blog() {
  return (
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
      <Display title={"Our Blogs"} subtitle={"Blogs"} />
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary"> Our Blogs</h4>
            <h1 className="display-4 mb-4">Check out our latest stories</h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div className="blog-carousel owl-carousel">
            <div className="blog-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="blog-img p-4 pb-0">
                <a href="#">
                  <img
                    src="img/feature-4.jpg"
                    className="img-fluid w-100"
                    alt
                  />
                </a>
              </div>
              <div className="blog-content p-4">
                <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                  <div className="small">
                    <span className="fa fa-user text-primary me-2" /> Martin.C
                  </div>
                  <div className="small">
                    <span className="fa fa-calendar text-primary me-2" /> 30 Dec
                    2025
                  </div>
                </div>
                <a href="#" className="h4 d-inline-block mb-3">
                  Full Body Home Workout
                </a>
                <p className="mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  libero soluta impedit eligendi? Quibusdam, laudantium.
                </p>
                <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                  {" "}
                  <span className="me-2">Read More</span>{" "}
                  <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="blog-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="blog-img p-4 pb-0">
                <a href="#">
                  <img
                    src="img/feature-3.jpg"
                    className="img-fluid w-100"
                    alt
                  />
                </a>
              </div>
              <div className="blog-content p-4">
                <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                  <div className="small">
                    <span className="fa fa-user text-primary me-2" /> Martin.C
                  </div>
                  <div className="small">
                    <span className="fa fa-calendar text-primary me-2" /> 30 Dec
                    2025
                  </div>
                </div>
                <a href="#" className="h4 d-inline-block mb-3">
                  31-Day Fitness Calendar
                </a>
                <p className="mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  libero soluta impedit eligendi? Quibusdam, laudantium.
                </p>
                <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                  {" "}
                  <span className="me-2">Read More</span>{" "}
                  <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="blog-item wow fadeInUp" data-wow-delay="0.6s">
              <div className="blog-img p-4 pb-0">
                <a href="#">
                  <img
                    src="img/feature-2.jpg"
                    className="img-fluid w-100"
                    alt
                  />
                </a>
              </div>
              <div className="blog-content p-4">
                <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                  <div className="small">
                    <span className="fa fa-user text-primary me-2" /> Martin.C
                  </div>
                  <div className="small">
                    <span className="fa fa-calendar text-primary me-2" /> 30 Dec
                    2025
                  </div>
                </div>
                <a href="#" className="h4 d-inline-block mb-3">
                  At Home Ab Workout
                </a>
                <p className="mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  libero soluta impedit eligendi? Quibusdam, laudantium.
                </p>
                <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                  {" "}
                  <span className="me-2">Read More</span>{" "}
                  <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="blog-item">
              <div className="blog-img p-4 pb-0">
                <a href="#">
                  <img
                    src="img/feature-1.jpg"
                    className="img-fluid w-100"
                    alt
                  />
                </a>
              </div>
              <div className="blog-content p-4">
                <div className="blog-comment d-flex justify-content-between py-2 px-3 mb-4">
                  <div className="small">
                    <span className="fa fa-user text-primary me-2" /> Martin.C
                  </div>
                  <div className="small">
                    <span className="fa fa-calendar text-primary me-2" /> 30 Dec
                    2025
                  </div>
                </div>
                <a href="#" className="h4 d-inline-block mb-3">
                  Full Body Home Workout
                </a>
                <p className="mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                  libero soluta impedit eligendi? Quibusdam, laudantium.
                </p>
                <a href="#" className="btn btn-dark py-2 px-4 ms-2">
                  {" "}
                  <span className="me-2">Read More</span>{" "}
                  <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
