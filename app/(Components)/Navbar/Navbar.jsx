"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import img2 from "../../../assets/images-removebg-preview.png";
import React from "react";
import Image from "next/image";
export default function Navbar() {
  let path = usePathname();
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <Link class="navbar-brand fw-bolder fs-3 me-5 text-danger" href="#">
          Amazon
          <Image src={img2} alt="product.title" width={40} height={30} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item me-2 fs-4">
              <Link
                class={
                  path === "/" ? "nav-link fw-bolder text-danger" : "nav-link"
                }
                aria-current="page"
                href="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item me-2 fs-4">
              <Link
                class={
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
            <li class="nav-item fs-4">
              <Link
                class={
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
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-2">
              <i
                class="fa-solid fa-basket-shopping fa-2x me-3"
                style={{ cursor: "pointer" }}
              ></i>
            </li>
            <li class="nav-item me-2">
              <i
                class="fa-regular fa-heart fa-2x me-4 pe-auto"
                style={{ cursor: "pointer" }}
              ></i>
            </li>
            <li class="nav-item me-2">
              <i
                class="fa-regular fa-user fa-2x me-2 pe-auto"
                style={{ cursor: "pointer" }}
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
