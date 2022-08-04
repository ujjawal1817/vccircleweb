import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleRight } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";

import "swiper/css/bundle";
import Card from "./Card";

export default function Carousel(props) {
  return (
    <div className="container" key={props.item.stories_list.feid}>
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
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
                {props.item.stories_list.map((item, index) => {
                  if (index === 0) return null;
                  return (
                    <SwiperSlide>
                    <Card
                      src={item.file_url}
                      width="100%"
                      title={item.title}
                      author={item.author_details[0].name}
                      publish={item.publish}
                      flxCls="cara-card"
                    />
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
  );
}
