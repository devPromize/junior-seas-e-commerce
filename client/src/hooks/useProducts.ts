// src/hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, ProductQueryParams } from "../services/product-service";

export const useProducts = (params: ProductQueryParams) => {
  return useQuery({
    queryKey: ["products", params], // ✅ Key includes params for caching
    queryFn: () => fetchProducts(params), // ✅ Fetch function
   placeholderData: (previousData) => previousData, // ✅ Replaces keepPreviousData // ✅ Smooth pagination
    staleTime: 1000 * 60, // ✅ 1 min
  });
};
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



// type ProductResponse = {
//   products: Product[];
//   totalPages: number;
//   currentPage: number;
//   totalResults: number;
// };

// export const useProducts = (filters: any) => {
//   return useQuery<ProductResponse>({
//     queryKey: ["products", filters],
//     queryFn: () => getProducts(filters),
//   });
// };
