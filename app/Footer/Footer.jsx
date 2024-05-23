import React from "react";

export default function Footer() {
  return (
    <div className="p-5" style={{ backgroundColor: " #F8F9FA" }}>
      <h2>Get The Amazon app</h2>
      <p>we will send you a link, open it on your phone to download the app</p>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <input className="form-control" placeholder="Email..."></input>
          </div>
          <div className="col-lg-3">
            <button className="btn bg-main w-100 text-danger">
              Share App Link
            </button>
          </div>
        </div>
      </div>
      <hr className="w-100" style={{ opacity: ".08" }}></hr>
      <div className=" d-flex justify-content-between align-items-center">
        <div className="box1 d-flex">
          <h5
            style={{ fontWeight: "bold", fontSize: "13px", marginTop: "12px" }}
          >
            {" "}
            Payment Partners
          </h5>
        </div>
        <div className="box2 d-flex align-items-center ">
          <h5
            style={{ fontWeight: "bold", fontSize: "13px", marginTop: "10px" }}
          >
            Get deliveries With Amazon
          </h5>
        </div>
      </div>
      {/* <hr className="w-100" style={{ opacity: ".08" }}></hr> */}
    </div>
  );
}
