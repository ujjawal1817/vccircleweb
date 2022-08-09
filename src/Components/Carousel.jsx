import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleRight } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";

import "swiper/css/bundle";
import Card from "./Card";
import Premium from "./Premium";

export default function Carousel(props) {
  
  
  return (
    <>
      {props.item.stories_list[0] ? (
        <div className="container" key={props.item.stories_list[0].feid}>
          <div className="carouselheader">
            <p className="carousel-heading-one ">
              {props.item.section_name}{" "}
              <span className="desk-mheading">{props.maheading}</span>
              <span className="res-c-heading">{props.resheading}</span>
            </p>
            <p className="carousel-heading-two">
              View More <FaAngleRight className="angle-right" />{" "}
            </p>
          </div>

          <div className="cara-container">
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
              spaceBetween={10}
              slidesPerView={4}
              navigation={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("Card movinf")}
            >
              <div className="carousel-card">
                <div className="main-card-box ">
                  {props.item.stories_list.map((item) => {
                    // if (index === 0) return null;
                    return (
                      <SwiperSlide>
                        <div className="premium-container">
                          <Card
                            src={item.file_url}
                            imgSlug={item.slug}
                            imgCls="card-img-cls"
                            width="100%"
                            title={item.title}
                            slug={item.slug}
                            slugauth={item.author_details[0].slug}
                            author={item.author_details[0].name}
                            authorsecond={item.author_details.length>1?item.author_details[1].name:""}
                            sname={item.author_details.length>1? "+1":""}
                            tooltipcls="tooltip"
                            publish={item.publish}
                            flxCls="cara-card"
                            cardDes="card-desc"
                          />
                          {item.premium === "1" ? (
                            <Premium positionCls="cara-pre" />
                          ) : null}
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>

                {/* <div className="main-card-box ">
                    <div className="card-images">
                    <img src={props.item.stories_list[0].file_url} className="" alt="" />

                      <span className="card-span-pre">PREMIUM</span>
                    </div>
                    <div className="card-details">
                      
                    
                    <p className="card-para">{props.item.stories_list[1].title}</p>
                    <p className="card-author">{props.item.stories_list[1].author_details[0].name}</p>
                    </div>
                  </div>


                  <div className="main-card-box ">
                    <div className="card-images">
                    <img src={props.item.stories_list[0].file_url} className="" alt="" />

                      <span className="card-span-pre">PREMIUM</span>
                    </div>
                    <div className="card-details">
                      
                    
                    <p className="card-para">{props.item.stories_list[2].title}</p>
                    <p className="card-author">{props.item.stories_list[2].author_details[0].name}</p>
                    </div>
                  </div>


                  <div className="main-card-box ">
                    <div className="card-images">
                    <img src={props.item.stories_list[0].file_url} className="" alt="" /  >

                      <span className="card-span-pre">PREMIUM</span>
                    </div>
                    <div className="card-details">
                      
                    
                    <p className="card-para">{props.item.stories_list[3].title}</p>
                    <p className="card-author">{props.item.stories_list[3].author_details[0].name}</p>
                    </div>
                  </div> */}
              </div>
            </Swiper>
          </div>
        </div>
      ) : null}
    </>
  );
}
