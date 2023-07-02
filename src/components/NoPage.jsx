import React from "react";
import "./css/noPage.css";
import Lottie from "lottie-react";
import animationData from "./lotttie/404.json";
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
      <Lottie animationData={animationData} height={"400px"} width={"400px"} />
      No page Found!
      <br />
      <button class="button">
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
      </button>
    </div>
  );
}
