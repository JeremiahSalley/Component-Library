import React from "react";
import star from "../img/rate.png";

export default function Star() {
  return <img style={starStyle} src={star} />;
}

const starStyle = {
  height: "10px",
  width: "72.41px"
};