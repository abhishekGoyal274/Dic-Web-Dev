import React from "react";
import "./css/noPage.css";
import Lottie from "react-lottie";
import animationData from "./data/404.json";
import { Link } from "react-router-dom";

export default function NoPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="center">
      <Lottie options={defaultOptions} height={400} width={400} />
      No page Found!    
      <br/>
      <button class="button">
        <Link style={{textDecoration:"none"}} to="/">Home</Link>
      </button>
    </div>
  );
}
