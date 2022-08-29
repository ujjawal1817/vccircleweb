import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Premium from "./Premium";

export default function Card(props) {
  return (
    <div className={props.clsName}>
      <div className={props.flxCls}>
        <div className={props.imgVccls}>
          <Link to={props?.imgSlug || "/"}>
            <img
              src={props.src}
              alt=""
              width={props.width}
              className={props.imgCls}
              height={props.height}
            />
            {props.premium === "1" ? <Premium positionCls="premium-text-editor" /> : null}
          </Link>
        </div>
        <div className={props.sectionDetails}>
          <h3 className="card-title">
            <Link to={props?.slughead || "/"}>{props.heading}</Link>
          </h3>

          <h4 className={props.cardDes}>
            <Link to={props?.slug || "/"} className="colr">
              {props.title}
            </Link>
          </h4>

          <ul className="author-flx">
            <li className="li-circle">
              {moment(props.publish).format("Do MMM YYYY")}

            </li>
            <li className="li-author">
              <Link to={props?.slugauth || "/"} className="authcolr">

                {props.author}


              </Link>
            </li>
            <li className={props.tooltipcls}>
              <Link to={props?.slugauth || "/"} >

                {props.sname}
              </Link>
            </li>
            <li className="tooltiptext">{props.authorsecond}</li>
          </ul>

        </div>
      </div>
    </div>
  );
}
