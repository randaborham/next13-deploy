import Image from "next/image";
import React from "react";
export default async function Details({ params }) {
  async function getapi() {
    let result = await fetch(
      `https://fakestoreapi.com/products/${params.Productid}`
    );
    let data = await result.json();
    return data;
  }
  const products = await getapi();
  console.log(products);
  //   console.log(params.Productid);
  return (
    <div className="container p-5">
      <div className="d-flex w-75 m-auto p-4">
        <Image
          src={products.image}
          alt={products.title}
          width={200}
          height={200}
        />
        <div className="ms-5">
          <h2>{products.category}</h2>
          <p>{products.description}</p>
          <button className="btn btn-danger text-center w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
