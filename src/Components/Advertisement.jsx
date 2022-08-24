import React from "react";

export default function Advertisement(props) {
  return (
    <div className="container">
      <div className={props.advBg}>
        <p className="advertisement-heading">Advertisement</p>
        <img
          style={props.pad}
          src={props.src}
          alt=""
          width={props.width}
        />
      </div>
    </div>
  );
}
