// src/components/HeroCarousel.tsx

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useHeroCarousel } from "../hooks/useHeroCarousel";


interface Slide {
  id: number;
  image_url: string;
  title: string;
  description: string;
}


const HeroCarousel = () => {
  const { data = [], isLoading, error } = useHeroCarousel();
console.log("data has arrived", data);
  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Something went wrong</p>
  ) : (
    <div className="w-full h-[500px] relative overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
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
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded-lg max-w-md">
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













// import { useHeroCarousel } from "../hooks/useHeroCarousel";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";

// const HeroCarousel = () => {
//   const { data, isLoading, error } = useHeroCarousel();

//   if (isLoading) return <p>Loading hero slides...</p>;
//   if (error) return <p>Error loading hero slides</p>;

//   return (
//     <div className="w-full h-[500px] overflow-hidden relative">
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={1}
//         autoplay={{ delay: 4000 }}
//         loop={true}
//         pagination={{ clickable: true }}
//         modules={[Autoplay, Pagination]}
//         className="h-full"
//       >
//         {(data ?? []).map((slide) => (
//           <SwiperSlide key={slide._id}>
//             <div className="w-full h-full relative">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-40 p-6 text-white max-w-xl">
//                 <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
//                 <p className="text-lg mt-2">{slide.subtitle}</p>
//                 <Link
//                   to={slide.link}
//                   className="mt-4 inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
//                 >
//                   {slide.cta}
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HeroCarousel;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { config } from "../../config";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// // Removed incorrect import for autoplay CSS
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// // Match backend data structure
// interface Slide {
//   _id: number;
//   name: string;
//   image: string;
//   description: string;
//   _base: string;
// }

// const HeroCarousel: React.FC = () => {
//   const [slides, setSlides] = useState<Slide[]>([]);

//   useEffect(() => {
//     fetch(`${config.baseUrl}/hero-carousel`)
//       .then((res) => res.json())
//       .then((data) => setSlides(data))
//       .catch((err) => console.error("Failed to fetch hero carousel:", err));
//   }, []);

//   return (
//     <div className="w-full h-[400px] relative overflow-hidden">
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={1}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         pagination={{ clickable: true }} // Enable pagination
//         navigation={true} // Enable navigation
//         modules={[Autoplay, Pagination, Navigation]} // Include Navigation module
//         className="h-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide._id}>
//              <Link to={`/products/base/${slide._base}`}>
//             <div className="w-full h-full relative">
//               <img
//                 src={slide.image}
//                 alt={slide.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded-lg max-w-md">
//                 <h2 className="text-lg font-bold">{slide.name}</h2>
//                 <p className="text-sm">{slide.description}</p>
//               </div>
//             </div>
//             </Link>
//           </SwiperSlide>
//         ))}

//           {/* Style Swiper's auto-injected buttons */}
//   <style>{`
//     .swiper-button-prev,
//     .swiper-button-next {
//       color: black;
//     }
//     @media (max-width: 768px) {
//       .swiper-button-prev,
//       .swiper-button-next {
//         display: none;
//       }
//     }
//   `}</style>
//       </Swiper>
//     </div>
//   );
// };

// export default HeroCarousel;
