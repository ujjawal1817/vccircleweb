import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleRight } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import "swiper/css/bundle";

export default function Carousel(props) {
  return (
    <div className="container">
      <div className="carouselheader">
        <p className="carousel-heading-one ">
          {props.cheading}{" "}
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
            {props.caraDataOne.map((item) => {
              return (
                <SwiperSlide>
                  <div className="main-card-box ">
                    <div className="card-images">
                      <img src={item.src} className="" alt="" />

                      <span className="card-span-pre">PREMIUM</span>
                    </div>
                    <div className="card-details">
                      
                    
                    <p className="card-para">{item.para}</p>
                    <p className="card-author">{item.author}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
