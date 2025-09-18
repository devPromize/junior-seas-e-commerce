import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import {
  apple,
  dreBeats,
  gionee,
  harmanKardon,
  hp,
  huawei,
  infinix,
  itel,
  jbl,
  newAge,
  nokia,
  oppo,
  oraimo,
  playstation,
  poolee,
  samsung,
  sanDisk,
  tecno,
  tg,
  vivo,
  xiaomi,
  zealot,
  zte,
} from "../assets";

// Brand Data
const brands = [
  { name: "Apple", logo: apple },
  { name: "Dre Beats", logo: dreBeats },
  { name: "Gionee", logo: gionee },
  { name: "Harman Kardon", logo: harmanKardon },
  { name: "HP", logo: hp },
  { name: "Huawei", logo: huawei },
  { name: "Infinix", logo: infinix },
  { name: "Itel", logo: itel },
  { name: "JBL", logo: jbl },
  { name: "New Age", logo: newAge },
  { name: "Nokia", logo: nokia },
  { name: "Oppo", logo: oppo },
  { name: "Oraimo", logo: oraimo },
  { name: "PlayStation", logo: playstation },
  { name: "Poolee", logo: poolee },
  { name: "Samsung", logo: samsung },
  { name: "SanDisk", logo: sanDisk },
  { name: "Tecno", logo: tecno },
  { name: "TG", logo: tg },
  { name: "Vivo", logo: vivo },
  { name: "Xiaomi", logo: xiaomi },
  { name: "Zealot", logo: zealot },
  { name: "ZTE", logo: zte },
];

const BrandCarousel = () => {
  const navigate = useNavigate();

  const handleBrandClick = (brand: string) => {
    navigate(`/products/${brand.toLowerCase()}`);
  };

  return (
    <div className="w-full px-2 py-1 relative">
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={5}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        speed={1500}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 4, spaceBetween: 15},
          1024: { slidesPerView: 6, spaceBetween: 25 },
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.name} className="flex justify-center ">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-50 h-auto object-contain cursor-pointer lg:grayscale hover:grayscale-0 hover:scale-120 transition-all duration-500 sm:grayscale-0"
              onClick={() => handleBrandClick(brand.name)}
            />
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

export default BrandCarousel;
