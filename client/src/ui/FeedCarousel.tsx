// // src/components/FeedCarousel.tsx

// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { useFeedCarousel } from "../hooks/useFeed";

// interface Slide {
//   _id: number;
//   name: string;
//   image: string;
//   description: string;
//   _base: string;
// }

// const FeedCarousel = () => {
//   const { data, isLoading, error } = useFeedCarousel();
// console.log("data has arrived", data);
//   return isLoading ? (
//     <p>Loading...</p>
//   ) : error ? (
//     <p>Something went wrong</p>
//   ) : (
//     <div className="w-full h-[400px] relative overflow-hidden mb-15">
//       <h2 className="text-xl  font-bold m-5 mb-8 text-center underline decoration-yellow-500 underline-offset-8"> Feed Carousel.</h2>
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={2}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="h-full"
//       >
//         {data.map((slide: Slide) => (
//           <SwiperSlide key={slide._id}>
//             <Link to={`/products/base/${slide._base}`}>
//               <div className="w-full h-full relative ">
//                 <img
//                   src={slide.image}
//                   alt={slide.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded-lg max-w-md">
//                   <h2 className="text-lg font-bold">{slide.name}</h2>
//                   <p className="text-sm">{slide.description}</p>
//                 </div>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//         <style>{`
//           .swiper-button-prev,
//           .swiper-button-next {
//             color: black;
//           }
//           @media (max-width: 768px) {
//             .swiper-button-prev,
//             .swiper-button-next {
//               display: none;
//             }
//           }
//         `}</style>
//       </Swiper>
//     </div>
//   );
// };

// export default FeedCarousel;






import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
  A11y,
} from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useFeedCarousel } from "../hooks/useFeedCarousel";

interface Slide {
  id: number;
  image_url: string;
  title: string;
  description: string;
}

const FeedCarousel = () => {
  const { data = [], isLoading, error } = useFeedCarousel();
  const swiperRef = useRef<SwiperClass | null>(null);

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Something went wrong</p>
  ) : (
    <div
      className="relative w-full h-[450px] px-4 group"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      aria-roledescription="carousel"
      aria-label="Featured Products Carousel"
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold m-5 mt-22 text-center underline decoration-yellow-500 underline-offset-8">
        Feed Carousel.
      </h2>

      <SwiperReact
        modules={[Autoplay, Navigation, Pagination, EffectCoverflow, A11y]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        a11y={{
          enabled: true,
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        className="w-full h-[400px]"
      >
        {data.map((slide: Slide) => (
          <SwiperSlide key={slide.id}>
            <Link
              to={`/products/base/${slide.title}`}
              aria-label={`View product: ${slide.title}`}
            >
              <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={slide.image_url}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 p-4 rounded-lg max-w-md">
                  <h2 className="text-lg font-bold">{slide.title}</h2>
                  <p className="text-sm">{slide.description}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </SwiperReact>

      {/* Custom Navigation */}
      <button
        onClick={handlePrevClick}
        className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={handleNextClick}
        className=" hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
        aria-label="Next slide"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default FeedCarousel;















// src/components/FeedCarousel.tsx

// src/components/FeedCarousel.tsx

// import { useRef } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";

// import {
//   Autoplay,
//   Navigation,
//   Pagination,
//   EffectCoverflow,
//   A11y,
// } from "swiper/modules";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/lazy";

// import { useFeedCarousel } from "../hooks/useFeed";

// interface Slide {
//   _id: number;
//   name: string;
//   image: string;
//   description: string;
//   _base: string;
// }

// const FeedCarousel = () => {
//   const { data, isLoading, error } = useFeedCarousel();
//   const prevRef = useRef<HTMLButtonElement>(null);
//   const nextRef = useRef<HTMLButtonElement>(null);

//   return isLoading ? (
//     <p>Loading...</p>
//   ) : error ? (
//     <p>Something went wrong</p>
//   ) : (
//     <div
//       className="relative w-full h-[450px] px-4 group"
//       onMouseEnter={() => Swiper?.autoplay?.stop()}
//       onMouseLeave={() => Swiper?.autoplay?.start()}
//       aria-roledescription="carousel"
//       aria-label="Featured Products Carousel"
//     >
//       <h2 className="text-xl font-bold text-center mb-5 underline decoration-yellow-500 underline-offset-8">
//         Feed Carousel
//       </h2>

//       <Swiper
//         modules={[Autoplay, Navigation, Pagination, EffectCoverflow, A11y]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         onBeforeInit={(swiper) => {
//           // @ts-ignore
//           swiper.params.navigation.prevEl = prevRef.current;
//           // @ts-ignore
//           swiper.params.navigation.nextEl = nextRef.current;
//         }}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         lazy={true}
//         a11y={{
//           enabled: true,
//           prevSlideMessage: "Previous slide",
//           nextSlideMessage: "Next slide",
//           firstSlideMessage: "This is the first slide",
//           lastSlideMessage: "This is the last slide",
//           slideLabelMessage: "{{index}} / {{slidesLength}}",
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 0,
//           },
//         }}
//         className="w-full h-[400px]"
//       >
//         {data.map((slide: Slide, index: number) => (
//           <SwiperSlide key={slide._id}>
//             <Link
//               to={`/products/base/${slide._base}`}
//               aria-label={`View product: ${slide.name}`}
//             >
//               <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
//                 <img
//                   src={slide.image}
//                   alt={slide.name}
//                   className="w-full h-full object-cover swiper-lazy"
//                   loading="lazy"
//                 />
//                 <div className="swiper-lazy-preloader"></div>
//                 <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 p-4 rounded-lg max-w-md">
//                   <h2 className="text-lg font-bold">{slide.name}</h2>
//                   <p className="text-sm">{slide.description}</p>
//                 </div>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation */}
//       <button
//         ref={prevRef}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
//         aria-label="Previous slide"
//       >
//         <FaChevronLeft size={20} />
//       </button>
//       <button
//         ref={nextRef}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
//         aria-label="Next slide"
//       >
//         <FaChevronRight size={20} />
//       </button>
//     </div>
//   );
// };

// export default FeedCarousel;





// // src/components/FeedCarousel.tsx

// import { useRef } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// import "swiper/css";
// // import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";

// import { useFeedCarousel } from "../hooks/useFeed";
// import type { Swiper as SwiperClass } from "swiper";

// interface Slide {
//   _id: number;
//   name: string;
//   image: string;
//   description: string;
//   _base: string;
// }
// const FeedCarousel = () => {
//   const { data, isLoading, error } = useFeedCarousel();
//   const prevRef = useRef<HTMLButtonElement>(null);
//   const nextRef = useRef<HTMLButtonElement>(null);
//   const swiperRef = useRef<SwiperClass | null>(null);

//   return isLoading ? (
//     <p>Loading...</p>
//   ) : error ? (
//     <p>Something went wrong</p>
//   ) : (
//     <div
//       className="relative w-full h-[450px] px-4 group"
//       onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
//       onMouseLeave={() => swiperRef.current?.autoplay?.start()}
//     >
//       <h2 className="text-xl font-bold text-center mb-5 underline decoration-yellow-500 underline-offset-8">
//         Feed Carousel
//       </h2>

//       <Swiper
//         modules={[Autoplay, Navigation, EffectCoverflow]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         onBeforeInit={(swiper) => {
//           // Fix: assign the navigation buttons after DOM mounts
//           // @ts-ignore
//           swiper.params.navigation.prevEl = prevRef.current;
//           // @ts-ignore
//           swiper.params.navigation.nextEl = nextRef.current;
//         }}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 0,
//           },
//         }}
//         className="w-full h-[400px]"
//       >
//         {data.map((slide: Slide) => (
//           <SwiperSlide key={slide._id}>
//             <Link to={`/products/base/${slide._base}`}>
//               <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
//                 <img
//                   src={slide.image}
//                   alt={slide.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 p-4 rounded-lg max-w-md">
//                   <h2 className="text-lg font-bold">{slide.name}</h2>
//                   <p className="text-sm">{slide.description}</p>
//                 </div>
//               </div>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation */}
//       <button
//         ref={prevRef}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
//       >
//         {/* <ChevronLeft size={20} /> */}
//       </button>
//       <button
//         ref={nextRef}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
//       >
//         {/* <ChevronRight size={20} /> */}
//       </button>
//     </div>
//   );
// };
// ;

// export default FeedCarousel;

