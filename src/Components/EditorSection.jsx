import React from "react";

export default function EditorSection(props) {
  return (
    <div className="container">
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
            <a href={props.item.stories_list[0].slug} className="api-slug-title">
              {props.item.stories_list[0].title}
            </a>
          </p>
          <p className="editor-section-author">
            30 September . Madhurima Nandy
          </p>
        </div>
        {/* 3 Small Divs */}
        <div className="editor-width editor-border-right">
          <div className=" editor-section-two editor-border">
            <div className="editor-section-two-img">
              <div className="premium-container">
                <span className="premium-text-editor-2">PREMIUM</span>
                <img
                  src={props.item.stories_list[1].file_url}
                  alt=""
                  width={props.clsMainImg2}
                  className="res-smallpic api-editor-subimg"
                />
              </div>
            </div>
            <div className="editor-section-two-details ">
              <p className="editor-section-two-details-title">
              <a href={props.item.stories_list[1].industry_details[0].slug}>
              {props.item.stories_list[1].industry_details[0].name}
              </a>
              </p>
              <p className="editor-section-two-details-desc">
              <a href={props.item.stories_list[1].slug} className="api-slug-title">
              {props.item.stories_list[1].title}
              </a>
              </p>
              <p className="editor-section-two-details-author">
                30 September . Madhurima Nandy
              </p>
            </div>
          </div>

          <div className=" editor-section-two editor-border">
            <div className="editor-section-two-img premium-container">
              <span className="premium-text-editor" style={props.st2}>
                PREMIUM
              </span>
              <img
                src={props.item.stories_list[2].file_url}
                alt=""
                width={props.clsMainImg3}
                className="res-smallpic api-editor-subimg"
              />
            </div>
            <div className="editor-section-two-details ">
              <p className="editor-section-two-details-title">
              <a href={props.item.stories_list[2].industry_details[0].slug}>
              {props.item.stories_list[2].industry_details[0].name}
              </a>
              </p>
              <p className="editor-section-two-details-desc">
              <a href={props.item.stories_list[2].slug} className="api-slug-title">
              {props.item.stories_list[2].title}
              </a>
              </p>
              <p className="editor-section-two-details-author">
                30 September . Madhurima Nandy
              </p>
            </div>
          </div>

          <div className=" editor-section-two">
            <div className="editor-section-two-img">
              <img
                src={props.item.stories_list[3].file_url}
                alt=""
                width={props.clsMainImg4}
                className="res-smallpic api-editor-subimg"
              />
            </div>
            <div className="editor-section-two-details">
              <p className="editor-section-two-details-title">
              <a href={props.item.stories_list[3].industry_details[0].slug}>
              {props.item.stories_list[3].industry_details[0].name}
              </a>
              </p>
              <p className="editor-section-two-details-desc">
              <a href={props.item.stories_list[3].slug} className="api-slug-title">
              {props.item.stories_list[3].title}
              </a>
              </p>
              <p className="editor-section-two-details-author">
                30 September . Madhurima Nandy
              </p>
            </div>
          </div>
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
      <hr className={props.display} />
    </div>
  );
}
