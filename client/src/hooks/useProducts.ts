// src/hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/product-service";
import {Product} from "../../type"

// export const useProducts = (categoryId: string) => {
//   return useQuery({
//     queryKey: ["products", categoryId],
//     queryFn: () => getProducts(categoryId),
//     enabled: !!categoryId || categoryId === "", // allow empty filter
//   });
// };


// export const useProducts = (filters: {
//   category?: string;
//   priceRange?: [number, number];
//   ram?: string;
//   rom?: string;
//   sort?: string;
// }) => {
//   return useQuery({
//     queryKey: ["products", filters],
//     queryFn: () => getProducts(filters),
//   });
// };




// export const useProducts = (filters: any) => {
//   return useQuery<Product[]>({
//     queryKey: ["products", filters],
//     queryFn: () => getProducts(filters),
//   });
// };



type ProductResponse = {
  products: Product[];
  totalPages: number;
  currentPage: number;
  totalResults: number;
};

export const useProducts = (filters: any) => {
  return useQuery<ProductResponse>({
    queryKey: ["products", filters],
    queryFn: () => getProducts(filters),
  });
};
