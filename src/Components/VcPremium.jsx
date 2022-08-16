import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import "swiper/css/bundle";
import Card from "./Card";
import Premium from "./Premium";

export default function VcPremium(props) {
  return (
    <>
      {props.item.stories_list[0] ? (
          <div className="container">
        <div className="main-container">
            <div className="vcpre-header">
              <div className="vc-pre-logo">
                <p className="vcpre-headingone">VCCircle Premium</p>
                <img
                  src="./Images/crown.png"
                  className="res-crown crown"
                  alt=""
                />
              </div>
              <div className="deskSub">
                <button className="vcpre-btn ">Subscribe</button>
              </div>
            </div>

            <div className="cara-container vc-pre-shadow">
              <Swiper
                // install Swiper modules
                breakpoints={{
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {props.item.stories_list.map((item, index) => {
                  // if (index === 0) return null;
                  return (
                    <SwiperSlide>
                      <div className="vc-card">
                        <div className="premium-container">
                          <Card
                            src={item.file_url}
                            imgSlug={item.slug}
                            imgCls="vc-pre-imgcls"
                            width="100%"
                            title={item.title}
                            slug={item.slug}
                            slughead={item.industry_details[0].slug}
                            heading={item.industry_details[0].name}
                            slugauth={item.author_details[0].slug}
                            author={item.author_details[0].name}
                            publish={item.publish}
                            sectionDetails="vc-details"
                            imgVccls="vc-pre-img-div"
                            height="160px"
                            cardDes="card-desc"
                          />
                          {item.premium === "1" ? (
                            <Premium positionCls="vc-pre" />
                          ) : null}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="res-btnSub">
              <button className="vcpre-btn ">Subscribe</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
