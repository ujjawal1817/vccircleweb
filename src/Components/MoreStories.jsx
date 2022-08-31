import React from "react";
import Card from "./Card";


export default function MoreStories(props) {
  return (
    <>
      {props.item.stories_list[0] ? (
        <div className="container">
          <h3 className="ms-main-heading">More Stories</h3>

          <div className="morestories-main">
            <div className="stes_flx">
              {props.item.stories_list.map((item, index) => {
                // if(index===0)return null;

                return (
                  
                    <Card
                    clsName="wi"
                      src={item.file_url}
                      premium={item.premium}
                      imgSlug={item.slug}
                      imgCls="more-imgcls"
                      imgVccls="pos-card"
                      slughead={item.industry_details[0].slug}
                      heading={item.industry_details[0].name}
                      slug={item.slug}
                      title={item.title}
                      slugauth={item.author_details[0].slug}
                      author={item.author_details[0].name}
                      authFlex="author-flx"
                      publish={item.publish}
                      width="164px"
                      flxCls="more-story-flex"
                      cardDes="ms-para "
                      sectionDetails="more-padd"
                    />
                    
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
