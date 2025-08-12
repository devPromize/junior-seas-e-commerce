// src/hooks/useHeroCarousel.ts
import { useQuery } from "@tanstack/react-query";
import { getHeroCarousel } from "../services/carousels-service";

// interface HeroSlide {
//   _id: number;
//   title: string;
//   subtitle: string;
//   image: string;
//   cta: string;
//   link: string;
// }

export const useHeroCarousel = () => {
    return useQuery({
        queryKey:["hero-carousel"],
        queryFn: () => getHeroCarousel()
        // refetchOnWindowFocus: false,
    });
};

// export const useHeroCarousel = () => {
//   return useQuery<HeroSlide[], Error>({
//     queryKey: ["hero-carousel"],
//     queryFn: getHeroCarousel,
//   });
// };
