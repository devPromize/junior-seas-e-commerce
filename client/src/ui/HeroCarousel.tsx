// src/components/HeroCarousel.tsx

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useHeroCarousel } from "../hooks/useHeroCarousel";
import HeroCarouselSkeleton from "./components/HeroCrouselSkeleton";


interface Slide {
  id: number;
  image_url: string;
  title: string;
  description: string;
}


const HeroCarousel = () => {
  const { data = [], isLoading, error } = useHeroCarousel();
  return isLoading ? (
    <HeroCarouselSkeleton />
  ) : error ? (
    <p className="text-red-500">Something went wrong, Please Refresh Page</p>
  ) : (
    <div className="w-full h-[500px] relative overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {data.map((slide: Slide) => (
          <SwiperSlide key={slide.id}>
            <Link to={`/products/base/${slide.id}`}>
              <div className="w-full h-full relative bg-[--color-columbia-blue]">
                <img
                  src={slide.image_url}
                  alt={slide.title}
                  className="w-full h-full object-cover sm:object-right "
                />
                <div className="absolute bottom-4 left-4 text-white bg-black/80 p-4 rounded-lg max-w-md">
                  <h2 className="text-lg font-bold">{slide.title}</h2>
                  <p className="text-sm">{slide.description}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        <style>{`
          .swiper-button-prev,
          .swiper-button-next {
            color: black;
          }
          @media (max-width: 768px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none;
            }
          }
        `}</style>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;