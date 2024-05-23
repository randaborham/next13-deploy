"use client";
import Product from "./(Components)/Product/Product.jsx";
import Image from "next/image";
import styles from "./page.module.css";
import img from "../assets/photo-1505740420928-5e560c06d30e.avif";
import img2 from "../assets/photo-1542291026-7eec264c27ff.avif";
import img4 from "../assets/photo-1526170375885-4d8ecf77b99f.avif";
import img5 from "../assets/slider-image-1.jpeg";
import Slider from "./(Components)/Slider/Slider.jsx";

export default function Home() {
  return (
    <div className="container p-5">
      <Slider />
      <Product />
    </div>
  );
}
