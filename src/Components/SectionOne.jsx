import axios from "axios";
import React from "react";

export default function SectionOne(props) {

 
   return (
    
    <>
    {props.item.stories_list[0]?
      (
   
      <div className="container" >
      
        <div className="section-one" key={props.item.stories_list[0].feid}>
          <div className="section-details">
            <p className="section-detail-heading"><a href={props.item.stories_list[0].industry_details[0].slug}  style={{color:"#096ffa"}}>{props.item.stories_list[0].industry_details[0].name}</a></p>
            <p className="section-detail-title">
             <a href={props.item.stories_list[0].slug} style={{color:"black"}}>{props.item.stories_list[0].title}</a> 
            </p>
            <p className="section-detail-desc">
              {props.item.stories_list[0].summary}
            </p>
            <p className="section-detail-author">
              30 September . Madhurima Nandy
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
          <div className="card-1 res-card-1" key={props.item.stories_list[1].feid}>
            <div className="premium-container">
              <img
                src={props.item.stories_list[1].file_url}
                className="res-small-pic api-img"
                alt=""
              />
              <span className="premium-text">PREMIUM</span>
            </div>
            <div className="res-card-details ">
              <p className="card-title">
                <a href={props.item.stories_list[1].industry_details[0].slug }>
                {props.item.stories_list[1].industry_details[0].name}
                </a>
                
              </p>
              <p className="card-desc">
              <a href={props.item.stories_list[1].slug} className=" api-slug-title">
              {props.item.stories_list[1].title}
              </a>
              </p>
              <p className="card-author">
                {props.item.stories_list[1].author_details[0].name}
                {props.item.stories_list[1].publish}
              </p>
            </div>
          </div>
          <div className="card-2 res-card-1">
            <div className="premium-container">
              <img
                src={props.item.stories_list[2].file_url}
                className="res-small-pic api-img"
                alt=""
              />
              <span className="premium-text">PREMIUM</span>
            </div>
            <div className="res-card-details ">
              <p className="card-title">
                <a href={props.item.stories_list[2].industry_details[0].slug}>
                {props.item.stories_list[2].industry_details[0].name}
                </a>
              </p>
              <p className="card-desc">
                <a href={props.item.stories_list[2].slug} className="api-slug-title">
                {props.item.stories_list[2].title}
                </a>
              </p>
              <p className="card-author">
                {props.item.stories_list[2].author_details[0].name}
                {props.item.stories_list[2].publish}
              </p>
            </div>
          </div>
          <div className="card-3 res-card-1">
            <div className="sec-two-img-consu">
              <img
                src={props.item.stories_list[3].file_url}
                alt=""
                className="res-small-pic api-img"
              />
            </div>
            <div className="res-card-details">
              <p className="card-title">
               <a href= {props.item.stories_list[3].industry_details[0].slug}>
               {props.item.stories_list[3].industry_details[0].name}
               </a>
              </p>
              <p className="card-desc">
                <a href={props.item.stories_list[3].slug } className="api-slug-title">
                {props.item.stories_list[3].title}
                </a>
              </p>
              <p className="card-author">
                {props.item.stories_list[3].author_details[0].name}
                {props.item.stories_list[3].publish}
              </p>
            </div>
          </div>
          <div className="card-4 res-card-1">
            <div className="premium-container">
              <img
                src={props.item.stories_list[4].file_url}
                className="res-small-pic api-img"
                alt=""
              />
              <span className="premium-text">PREMIUM</span>
            </div>
            <div className="res-card-details premium-container">
              <p className="card-title">
                <a href={props.item.stories_list[4].industry_details[0].slug}>
                {props.item.stories_list[4].industry_details[0].name}
                </a>
              </p>
              <p className="card-desc">
                <a href={props.item.stories_list[4].slug} className="api-slug-title">
                  {props.item.stories_list[4].title}
                </a>
              </p>
              <p className="card-author">
                {props.item.stories_list[4].author_details[0].name}
                {props.item.stories_list[4].publish}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>):null
      }
            
    </>
   

  ); 
 
  
  
}
