import axios from "axios";
import React from "react";
import Card from "./Card";
import moment from "moment";
import Premium from "./Premium";

export default function SectionOne(props) {
  return (
    <>
      {}
      <div className="container" key={props.item.stories_list[0].feid}>
        <div className="section-one">
          <div className="section-details">
            <p className="section-detail-heading">
              <a
                href={props.item.stories_list[0].industry_details[0].slug}
                style={{ color: "#096ffa" }}
              >
                {props.item.stories_list[0].industry_details[0].name}
              </a>
            </p>
            <p className="section-detail-title">
              <a
                href={props.item.stories_list[0].slug}
                style={{ color: "black" }}
              >
                {props.item.stories_list[0].title}
              </a>
            </p>
            <p className="section-detail-desc">
              {props.item.stories_list[0].summary}
            </p>
            <p className="section-detail-author">
              <span>
                {moment(props.item.stories_list[0].publish).format(
                  "Do MMM YYYY"
                )}{" "}
                .{" "}
              </span>
              {props.item.stories_list[0].author_details[0].name}
            </p>
            <button className="section-detail-button">Read More</button>
          </div>

          <img
            src={props.item.stories_list[0].file_url}
            alt="section-im"
            className="section-sub-img"
          />

          <div className="section-img"></div>
        </div>

        <div className="editor-section-three editor-width re-editor-sidead res-editor-section-sidead">
          <p className="sidead-para">Advertisement</p>
          <img
            src="./Images/sidead.png"
            alt=""
            className="side-ad res-sidead"
          />
        </div>

        <div className="section-two">
          {props.item.stories_list.map((item, index) => {
            if (index === 0) return null;
            return (
              <>
                <div className="premium-container">
                  <Card
                    clsName="card-1"
                    src={item.file_url}
                    cardDes="card-desc"
                    heading={item.industry_details[0].name}
                    title={item.title}
                    author={item.author_details[0].name}
                    publish={item.publish}
                    width="100%"
                  />
                  {item.premium==="1"?<Premium positionCls="premium-text-editor"/>:null}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
