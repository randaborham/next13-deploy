"use client";
import Image from "next/image.js";
import Link from "next/link";
import { useContext } from "react";

export default async function products() {
  async function getapi() {
    let result = await fetch(`https://fakestoreapi.com/products`);
    let data = await result.json();
    return data;
  }
  const products = await getapi();
  console.log(products);

  return (
    <>
      <div className="w-75 mx-auto bg-light p-3 mb-4 mt-4">
        <input
          className="form-control my-3"
          type="text"
          placeholder="Search...."
        ></input>
      </div>
      <div className="container p-5">
        <div className="row g-5">
          {products.map((product) => {
            return (
              // <p key={product.id}>{product.title}</p>

              <div className="col-md-3" key={product.id}>
                <div className="">
                  <Link className="" href={`/Products/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
                    />
                  </Link>
                  <h2>
                    {product.price}{" "}
                    <i className="fa-solid fa-star rating-color text-warning  fs-6"></i>
                  </h2>
                  <p>{product.title.split("").splice(0, 20)}</p>
                  <p className="h6">{product.category}</p>
                  <button className="btn btn-danger text-center w-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
