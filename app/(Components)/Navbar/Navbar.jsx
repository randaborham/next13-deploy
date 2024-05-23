"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import img2 from "../../../assets/images-removebg-preview.png";
import React from "react";
import Image from "next/image";
export default function Navbar() {
  let path = usePathname();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand fw-bolder fs-3 me-5 text-danger" href="#">
          Amazon
          <Image src={img2} alt="product.title" width={40} height={30} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-2 fs-4">
              <Link
                className={
                  path === "/" ? "nav-link fw-bolder text-danger" : "nav-link"
                }
                aria-current="page"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-2 fs-4">
              <Link
                className={
                  path === "/Products"
                    ? "nav-link fw-bolder text-danger"
                    : "nav-link"
                }
                aria-current="page"
                href="/Products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item fs-4">
              <Link
                className={
                  path === "/Blog"
                    ? "nav-link fw-bolder text-danger"
                    : "nav-link"
                }
                aria-current="page"
                href="/Blog"
              >
                New Collections
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-2">
              <i
                className="fa-solid fa-basket-shopping fa-2x me-3"
                style={{ cursor: "pointer" }}
              ></i>
            </li>
            <li className="nav-item me-2">
              <i
                className="fa-regular fa-heart fa-2x me-4 pe-auto"
                style={{ cursor: "pointer" }}
              ></i>
            </li>
            <li className="nav-item me-2">
              <i
                className="fa-regular fa-user fa-2x me-2 pe-auto"
                style={{ cursor: "pointer" }}
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
