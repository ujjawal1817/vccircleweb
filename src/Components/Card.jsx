import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Premium from "./Premium";

export default function Card(props) {
  return (
    <div className={props.clsName}>
      <div className={props.flxCls}>
        <div className={props.imgVccls}>
          <Link
          to={props?.imgSlug||""}
          >
       
          <img
            src={props.src}
            alt=""
            width={props.width}
            className="imgCls"
            height={props.height}
          />
          </Link>
        </div>
        <div className={props.sectionDetails}>
          <p className="card-title"><Link to={props?.slughead|| ""}>{props.heading}</Link></p>
          
          <p className={props.cardDes}><Link to={props?.slug|| ""} className="colr">{props.title}</Link></p>
          

          <p className="card-author">
            <span>{moment(props.publish).format("Do MMM YYYY")} . </span>
            <Link to={props?.slugauth|| ""} className="authcolr">
            {props.author}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
