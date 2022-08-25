import React from "react";
import Card from "./Card";
import moment from "moment";
import Premium from "./Premium";
import { Link } from "react-router-dom";


export default function SectionOne(props) {
  return (
    <>
      {props.item.stories_list[0] ? (
        <div className="container" key={props.item.stories_list[0].feid}>
          <div className="section-one">
            <div className="section-details">
              <h2 className="section-detail-heading ">
                {props.item.stories_list[0].industry_details[0].slug ? (
                  <Link
                    to={
                      props?.item.stories_list[0].industry_details[0].slug || ""
                    }
                    style={{ color: "#096ffa" }}
                  >
                    {props.item.stories_list[0].industry_details[0].name}
                  </Link>
                ) : null}
              </h2>
              <h1 className="section-detail-title">
                {props.item.stories_list[0].slug ? (
                  <Link
                    to={props?.item.stories_list[0].slug || ""}
                    style={{ color: "black" }}
                  >
                    {props.item.stories_list[0].title}
                  </Link>
                ) : null}
              </h1>
              <p className="section-detail-desc">
                {props.item.stories_list[0].summary}
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
              <button className="section-detail-button">Read More</button>
            </div>

            <div className="section-img " >

              {props.item.stories_list[0].industry_details[0].slug ? (
                <Link
                  to={props?.item.stories_list[0].industry_details[0].slug || ""}
                >
                  <img
                    src={props.item.stories_list[0].file_url}
                    alt="section-im"
                    className="section-sub-img skeleton"
                  />
                </Link>
              ) : null}
            </div>

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
                  <div >
                    <Card
                      clsName="card-1"
                      imgCls="imgCls "
                      premium={item.premium}
                      imgVccls="pos-card resp-card-img "
                      imgSlug={item.slug}
                      src={item.file_url}
                      slughead={item.industry_details[0].slug}
                      heading={item.industry_details[0].name}
                      slug={item.slug}
                      cardDes="card-desc-section-one "
                      title={item.title}
                      slugauth={item.author_details[0].slug}
                      author={item.author_details[0].name}
                      authorsecond={item.author_details.length > 1 ? item.author_details[1].name : ""}
                      sname={item.author_details.length > 1 ? "+1" : ""}
                      tooltipcls="tooltip"
                      publish={item.publish}
                      
                      flxCls="resp-div-card "
                      sectionDetails="resp-details-card "
                    />


                  </div>

                </>
              );
            })}

          </div>
        </div>
      ) : null}
    </>
  );
}
