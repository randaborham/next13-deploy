import React from "react";
import Image from "next/image";
import Link from "next/link";
import t1 from "../../../assets/t1.png";
import t2 from "../../../assets/t2.png";
import t3 from "../../../assets/t3.png";
import t4 from "../../../assets/t4.png";
import t5 from "../../../assets/t5.png";
import t6 from "../../../assets/t6.png";
import t7 from "../../../assets/t7.png";
import t8 from "../../../assets/t8.png";

import k1 from "../../../assets/k1.png";

import k2 from "../../../assets/k2.png";
import k3 from "../../../assets/k3.png";

export default async function Blog() {
  return (
    <>
      <div className="header"></div>
      <div style={{ width: "60%", margin: "auto" }} className="">
        <div className="container px-5 m-auto w-75 my-5">
          <div className="my-10">
            <h1
              className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit"
              style={{ fontSize: "30px", width: "80%", fontWeight: "1000" }}
            >
              Hot New Collections
            </h1>
            <p
              className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit2"
              style={{ width: "100%", fontWeight: "1000", color: "gray" }}
            >
              Take a look at the latest home furnishing products that we have
              added to our collection recently.
            </p>
          </div>
        </div>
        <div className="container mb-5 mt-5">
          <div className="row g-3">
            <div className="col-md-3">
              <div className="card d-flex">
                <div className="d-flex">
                  <Image
                    src={t1}
                    className="me-2 h-100"
                    style={{ width: "50px" }}
                    alt="img"
                  />
                  <div className="content">
                    <p className="fw-bolder">Slim Fit Stand</p>
                    <p className="fw-bold">2024-05-12</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card d-flex">
                <div className="d-flex">
                  <Image
                    src={t2}
                    className="me-2 h-100"
                    style={{ width: "50px" }}
                    alt="img"
                  />
                  <div className="content">
                    <p className="fw-bolder">Archer VR300 </p>
                    <p className="fw-bold">2024-05-16</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card ">
                <div className="d-flex">
                  <Image
                    src={t3}
                    className="me-2 h-100"
                    style={{ width: "50px" }}
                    alt="img"
                  />
                  <div className="content">
                    <p className="fw-bolder">PIXMA G3420 </p>
                    <p className="fw-bold">2024-05-17</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card d-flex">
                <div className="d-flex">
                  <Image
                    src={t4}
                    className="me-2 h-100"
                    style={{ width: "50px" }}
                    alt="img"
                  />
                  <div className="content">
                    <p className="fw-bolder">EOS M50 Mark</p>
                    <p className="fw-bold">2024-05-17</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card d-flex">
                <div className="d-flex">
                  <Image
                    src={t5}
                    className="me-2 h-100"
                    style={{ width: "50px" }}
                    alt="img"
                  />
                  <div className="content">
                    <p className="fw-bolder">PS5 DualSense</p>
                    <p className="fw-bold">2024-05-12</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card d-flex">
                <div className="d-flex">
                  <Image
                    src={t6}
                    className="me-2 h-100"
                    style={{ width: "50px" }}
                    alt="img"
                  />
                  <div className="content">
                    <p className="fw-bolder">Galaxy Buds 2</p>
                    <p className="fw-bold">2024-05-19</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card d-flex">
                <div className="d-flex">
                  <Image
                    src={t7}
                    className="me-2 h-100"
                    style={{ width: "50px" }}
                    alt="img"
                  />
                  <div className="content">
                    <p className="fw-bolder">WH-CH510</p>
                    <p className="fw-bold">2024-05-20</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card d-flex">
                <div className="d-flex">
                  <Image
                    src={t8}
                    className="me-2 h-100"
                    style={{ width: "50px" }}
                    alt="img"
                  />
                  <div className="content">
                    <p className="fw-bolder">016Ne Laptop</p>
                    <p className="fw-bold">2024-05-22</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 m-auto w-75 mt-4">
          <div className="my-10">
            <h1
              className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit"
              style={{ fontSize: "30px", width: "80%", fontWeight: "1000" }}
            >
              Last News & Updates
            </h1>
            <p
              className="text-center text-5xl md:text-6xl   w-[80%] md:w-[50%] mb-3 mx-auto text-gray tit2"
              style={{ width: "100%", fontWeight: "1000", color: "gray" }}
            >
              Learn about all the latest updates & news about us, interior
              decorations, home & office furnishings, and so much more..
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Image src={k1} alt="img" className="w-75 h-50 ms-5"></Image>
              <p className="text-center fw-bolder">Duramo 10 Running</p>
              <p className="text-center" style={{ color: "gray" }}>
                Men Fashion
              </p>
              <p className="text-center">
                <span>3.0</span>
                <i style={{ color: "orange" }} class="fa-solid fa-star"></i>
              </p>
            </div>
            <div className="col-md-4">
              <Image src={k2} alt="img" className="w-75 h-50 ms-5"></Image>
              <p className="text-center fw-bolder">Hoops 3.0 Lowg</p>
              <p className="text-center" style={{ color: "gray" }}>
                Men Fashion
              </p>
              <p className="text-center">
                <span>4.0</span>
                <i style={{ color: "orange" }} class="fa-solid fa-star"></i>
              </p>
            </div>
            <div className="col-md-4">
              <Image src={k3} alt="img" className="w-75 h-50 ms-5"></Image>
              <p className="text-center fw-bolder">Galaxy 6 Running</p>
              <p className="text-center" style={{ color: "gray" }}>
                Men Fashion
              </p>
              <p className="text-center">
                <span>5</span>
                <i style={{ color: "orange" }} class="fa-solid fa-star"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
