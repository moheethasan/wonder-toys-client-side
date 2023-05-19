import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slide1 from "../../../assets/slide1.avif";
import slide2 from "../../../assets/slide2.avif";
import slide3 from "../../../assets/slide3.avif";
import slide4 from "../../../assets/slide4.jpg";
import slide5 from "../../../assets/slide5.avif";
import slide6 from "../../../assets/slide6.jpg";
import slide7 from "../../../assets/slide7.avif";
import slide8 from "../../../assets/slide8.avif";
import slide9 from "../../../assets/slide9.avif";

const Gallery = () => {
  return (
    <div className="py-5 md:py-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold title-text pb-3">
        Products Gallery
      </h1>
      <Swiper
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          580: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        loop
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="container mx-auto"
      >
        <SwiperSlide>
          <img
            className="w-full px-3 py-10 md:py-20 select-none"
            src={slide1}
            alt="slide image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full px-3 py-10 md:py-20 select-none"
            src={slide2}
            alt="slide image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full px-3 py-10 md:py-20 select-none"
            src={slide3}
            alt="slide image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full px-3 py-10 md:py-20 select-none"
            src={slide4}
            alt="slide image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full px-3 py-10 md:py-20 select-none"
            src={slide5}
            alt="slide image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full px-3 py-10 md:py-20 select-none"
            src={slide6}
            alt="slide image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full px-3 py-10 md:py-20 select-none"
            src={slide7}
            alt="slide image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full px-3 py-10 md:py-20 select-none"
            src={slide8}
            alt="slide image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full px-3 py-10 md:py-20 select-none"
            src={slide9}
            alt="slide image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
