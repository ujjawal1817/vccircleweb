import React from "react";
import Card from "./Card";

export default function EditorSection(props) {
  return (
    <div className="container" key={props.item.stories_list[0].feid}>
      <h2 className="editor-section-heading">{props.item.section_name}</h2>
      <div className="editor-section">
        <div className="editor-section-one editor-width ">
          <div className="res-edit-head">
            <div className="premium-container">
              <span className="premium-text-editor" style={props.st}>
                PREMIUM
              </span>
              <img
                src={props.item.stories_list[0].file_url}
                alt=""
                className="res-editor-head-img api-editor-img"
              />
            </div>
          </div>

          <p className="editor-section-title">
            <a href={props.item.stories_list[0].industry_details[0].slug}>
              {props.item.stories_list[0].industry_details[0].name}
            </a>
          </p>
          <p className="editor-section-desc">
            <a
              href={props.item.stories_list[0].slug}
              className="api-slug-title"
            >
              {props.item.stories_list[0].title}
            </a>
          </p>
          <p className="editor-section-author">
            30 September . Madhurima Nandy
          </p>
        </div>
        {/* 3 Small Divs */}
        <div className="editor-width editor-border-right">
          {props.item.stories_list.map((item, index) => {
            if (index === 0) return null;
            return (
              <Card
                src={item.file_url}
                flxCls="editor-flex"
                heading={item.industry_details[0].name} 
                title={item.title}
                author={item.author_details[0].name}
                publish={item.publish}
                width="164px"
                sectionDetails="editor-sec-detail"
              />
            );
          })}
        </div>

        <div className="res-sidead-none">
          <div className="editor-section-three editor-width re-editor-sidead ">
            <p className="sidead-para">Advertisement</p>
            <img
              src="./Images/sidead.png"
              alt=""
              className="side-ad res-sidead"
            />
          </div>
        </div>
      </div>
      <hr className="border-api" />
    </div>
  );
}
