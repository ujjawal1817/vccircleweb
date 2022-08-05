import React from "react";
import moment from "moment";

export default function Card(props) {
  return (
    <div className={props.clsName}>
      <div className={props.flxCls}>
        <div className={props.imgVccls}>
          <img src={props.src} alt="" width={props.width} className="imgCls" height={props.height}/>
        </div>
        <div className={props.sectionDetails}>
          <p className="card-title">{props.heading}</p>
          <p className={props.cardDes}>{props.title}</p>
          <p className="card-author">
            <span>{moment(props.publish).format('Do MMM YYYY')} . </span>
            {props.author}
          </p>
        </div>
       </div>
    </div>
  );
}
