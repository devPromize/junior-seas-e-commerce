// import axios from "../lib/axios"; // my axios instance

// export const getHighlights = async () => {
//   const response = await axios.get("/highlights");
//   return response.data;
// };

import axiosInstance from "../lib/axios";

export const getHighlights = async (section: string) => {
  console.log("Fetching section:", section); // ADD THIS RE
  const response = await axiosInstance.get(`/products?section=${section}`);
  console.log("Product Data:", response.data); // ADD THIS
  return response.data.products || [];
};

