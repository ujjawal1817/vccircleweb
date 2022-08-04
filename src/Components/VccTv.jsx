import React from "react";
import { FaAngleRight, FaPlay } from "react-icons/fa";

export default function VccTv(props) {
  return (
    <div className="container">
      <div className="tv-bg">
        <div className="tv-header">
          <p className="tv-heading-one">VCC TV</p>
          <p className="tv-heading-two">
            View More <FaAngleRight className="angle-right" />
          </p>
        </div>

        <div className="tv-section">
          <div className="vcc_video">
            <iframe
              src="https://www.youtube.com/embed/Tn6-PIqc4UM"
              title="React in 100 Seconds"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="iframe"
            ></iframe>
          </div>
          <div className="tv-details">
            <p className="tv-heading">{props.item.stories_list[0].industry_details[0].name}</p>
            <p className="tv-title">
            {props.item.stories_list[0].title}
            </p>
            <p className="tv-para">
            {props.item.stories_list[0].summary}
            </p>
            <p className="tv-author"><span>{props.item.stories_list[0].publish}</span>{props.item.stories_list[0].author_details[0].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
