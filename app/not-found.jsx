import React from "react";
import img from "../assets/error.svg";
import Image from "next/image";
export default function Notfound() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Image src={img} alt="error" className="w-50" />
    </div>
  );
}
