import React from "react";

export default function Card(props) {
  return (
    <div className={props.clsName}>
      <div className={props.flxCls}>
        <div className={props.imgVccls}>
          <img src={props.src} alt="" width={props.width} className="imgCls" height={props.height}/>
        </div>
        <div className={props.sectionDetails}>
          <p className="card-title">{props.heading}</p>
          <p className="card-desc">{props.title}</p>
          <p className="card-author">
            <span>{props.publish}</span>
            {props.author}
          </p>
        </div>
       </div>
    </div>
  );
}
