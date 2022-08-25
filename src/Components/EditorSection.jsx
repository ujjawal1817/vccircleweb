import React from "react";
import Card from "./Card";
import moment from "moment";
import Premium from "./Premium";
import {Link} from "react-router-dom";

export default function EditorSection(props) {
  return (
    <>
      {props.item.stories_list[0] ? (
        <div className="container" key={props.item.stories_list[0].feid}>
          <h2 className="editor-section-heading">{props.item.section_name}</h2>
          <div className="editor-section">
            <div className="editor-section-one editor-width ">
              <div className="res-edit-head editor-image">
                <Link to={props?.item.stories_list[0].slug||""}>
                <img
                  src={props.item.stories_list[0].file_url}
                  alt=""
                  className="res-editor-head-img api-editor-img"
                />
                </Link>
              </div>

              <p className="editor-section-title">
                <Link to={props?.item.stories_list[0].industry_details[0].slug||""}>
                  {props.item.stories_list[0].industry_details[0].name}
                </Link>
              </p>
              <p className="editor-section-desc">
                <Link
                  to={props?.item.stories_list[0].slug||""}
                  className="api-slug-title"
                >
                  {props.item.stories_list[0].title}
                </Link>
              </p>
              <ul className="section-detail-author">
                <li className="li-circle">
                  {moment(props.item.stories_list[0].publish).format(
                    "Do MMM YYYY"
                  )}
                </li>
                <li className="li-author">
                {props.item.stories_list[0].author_details[0].slug ? (
                  <Link
                    to={
                      props?.item.stories_list[0].author_details[0].slug || ""
                    }

                    className='authcolr'
                  >
                    {props.item.stories_list[0].author_details[0].name}
                  </Link>
                ) : null}
                </li>
              </ul>
            </div>
            {/* 3 Small Divs */}
            <div className="editor-width editor-border-right">
              {props.item.stories_list.map((item, index) => {
                if (index === 0) return null;
                return (
                  
                    <Card
                      src={item.file_url}
                      imgCls="imgCls-section-one "
                      imgSlug={item.slug}
                      premium={item.premium}
                      flxCls="editor-flex"
                      slughead={item.industry_details[0].slug}
                      heading={item.industry_details[0].name}
                      slug={item.slug}
                      title={item.title}
                      slugauth={item.author_details[0].slug}
                      author={item.author_details[0].name}
                      publish={item.publish}
                      width="164px"
                      imgVccls="pos-card"
                      sectionDetails="editor-sec-detail"
                      cardDes="card-desc"
                    />
                   
                  
                );
              })}
            </div>

            <div className="res-sidead-none">
              <div className="editor-section-three editor-width re-editor-sidead editor-width-res ">
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
      ) : null}
    </>
  );
}
