import axiosInstance from "../lib/axios";

// export const getProducts = async (categoryId: string) => {
//   console.log("Fetching products for category:", categoryId); // ADD THIS
//   const response = await axiosInstance.get(`/products?category=${categoryId}`);
//   console.log("Product Data:", response.data); // ADD THIS
//   return response.data.products || [];
// };

// export const getProducts = async (filters: {
//   category?: string;
//   priceRange?: [number, number];
//   ram?: string;
//   rom?: string;
//   sort?: string;
// }) => {
//   const params = new URLSearchParams();

//   if (filters.category) params.append("category", filters.category);
//   if (filters.priceRange) {
//     params.append("minPrice", filters.priceRange[0].toString());
//     params.append("maxPrice", filters.priceRange[1].toString());
//   }
//   if (filters.ram) params.append("ram", filters.ram);
//   if (filters.rom) params.append("rom", filters.rom);
//   if (filters.sort) params.append("sort", filters.sort);

//   const response = await axiosInstance.get(`/products?${params.toString()}`);
//   return response.data.products || [];
// };




// services/productService.ts (or wherever getProducts is)
export const getProducts = async (filters: {
  category?: string;
  priceRange?: [number, number];
  ram?: string;
  rom?: string;
  sort?: string;
  page?: number;
  limit?: number;
}) => {
  const params = new URLSearchParams();

  if (filters.category) params.append("category", filters.category);
  if (filters.priceRange) {
    params.append("minPrice", filters.priceRange[0].toString());
    params.append("maxPrice", filters.priceRange[1].toString());
  }
  if (filters.ram) params.append("ram", filters.ram);
  if (filters.rom) params.append("rom", filters.rom);
  if (filters.sort) params.append("sort", filters.sort);
  if (filters.page) params.append("page", filters.page.toString());
  if (filters.limit) params.append("limit", filters.limit.toString());

  const response = await axiosInstance.get(`/products?${params.toString()}`);
  return response.data; // return full response: products, totalPages, etc.
};
