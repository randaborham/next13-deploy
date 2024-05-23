import React from "react";

export default function loading() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <i className="fas fa-spinner fa-spin fa-6x" style={{ color: "red" }}></i>
    </div>
  );
}
