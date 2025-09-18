import { supabase } from "../lib/supabase.js"; 
import slugify from "slugify";

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  category?: string;
  price_min?: number;
  price_max?: number;
  ram?: string;
  rom?: string;
  color?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export const fetchProducts = async (params: ProductQueryParams = {}) => {
  const {
    page = 1,
    limit = 20,
    category,
    price_min,
    price_max,
    ram,
    rom,
    color,
    search,
    sortBy = "created_at",
    sortOrder = "desc",
  } = params;

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase.from("products").select("*", { count: "exact" });

  // ✅ Top-level filters
  if (category) query = query.ilike("category", `%${category}%`);
  if (search) query = query.ilike("name", `%${search}%`);

  // ✅ Variant filters (JSONB)
  let variantFilter: any = {};
  if (ram) variantFilter.ram = ram;
  if (rom) variantFilter.rom = rom;
  if (color) variantFilter.color = color;

  if (Object.keys(variantFilter).length > 0) {
    query = query.contains("variants", [variantFilter]);
  }

  // ✅ Sorting
  query = query.order(sortBy, { ascending: sortOrder === "asc" });

  // ✅ Pagination
  query = query.range(from, to);

  const { data, count, error } = await query;
  if (error) {
    console.error("❌ Supabase fetchProducts error:", error.message);
    throw error;
  }

  // ⚠️ Price filtering in JSONB is tricky → do it in-memory
  let filteredData = data || [];
  if (price_min !== undefined || price_max !== undefined) {
    filteredData = filteredData.filter((product: any) => {
      // Assume each product has `variants` array with objects containing `price`
      return product.variants.some(
        (v: any) =>
          (!price_min || v.price >= price_min) &&
          (!price_max || v.price <= price_max)
      );
    });
  }

  return { data: filteredData, count };
};

// ✅ Create Product
export const createProduct = async (product: any) => {
  const slug = slugify(product.name, { lower: true });
  const { data, error } = await supabase
    .from("products")
    .insert([{ ...product, slug }])
    .single();
  if (error) throw error;
  return data;
};

// ✅ Update Product
export const updateProduct = async (id: string, product: any) => {
  const updateData = { ...product };
  if (product.name) {
    updateData.slug = slugify(product.name, { lower: true });
  }
  const { data, error } = await supabase
    .from("products")
    .update(updateData)
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};




//LAST LAST WORKIG
// import { supabase } from "../lib/supabase.js";
// import slugify from "slugify";

// export interface ProductQueryParams {
//   page?: number;
//   limit?: number;
//   category?: string;
//   price_min?: number;
//   price_max?: number;
//   ram?: string;
//   rom?: string;
//   color?: string;
//   search?: string;
//   sortBy?: string;
//   sortOrder?: "asc" | "desc";
// }

// export const fetchProducts = async (params: ProductQueryParams = {}) => {
//   const {
//     page = 1,
//     limit = 20,
//     category,
//     price_min,
//     price_max,
//     ram,
//     rom,
//     color,
//     search,
//     sortBy = "created_at",
//     sortOrder = "desc",
//   } = params;

//   const from = (page - 1) * limit;
//   const to = from + limit - 1;

//   let query = supabase.from("products").select("*", { count: "exact" });

//   if (category) query = query.ilike("category", `%${category}%`);
//   if (search) query = query.ilike("name", `%${search}%`);

//   // ✅ Filter inside variants JSONB
//   const variantFilters: any = {};
//   if (ram) variantFilters.ram = ram;
//   if (rom) variantFilters.rom = rom;
//   if (color) variantFilters.color = color;
//   if (price_min || price_max) {
//     variantFilters.price = {};
//     if (price_min) variantFilters.price.gte = price_min;
//     if (price_max) variantFilters.price.lte = price_max;
//   }

//   if (Object.keys(variantFilters).length > 0) {
//     query = query.contains("variants", [variantFilters]);
//   }

//   query = query.order(sortBy, { ascending: sortOrder === "asc" });
//   query = query.range(from, to);

//   const { data, count, error } = await query;
//   if (error) throw error;

//   return { data, count };
// };

// // ✅ Create Product
// export const createProduct = async (product: any) => {
//   const slug = slugify(product.name, { lower: true });
//   const { data, error } = await supabase
//     .from("products")
//     .insert([{ ...product, slug }])
//     .single();
//   if (error) throw error;
//   return data;
// };

// // ✅ Update Product
// export const updateProduct = async (id: string, product: any) => {
//   const updateData = { ...product };
//   if (product.name) {
//     updateData.slug = slugify(product.name, { lower: true });
//   }
//   const { data, error } = await supabase
//     .from("products")
//     .update(updateData)
//     .eq("id", id)
//     .single();
//   if (error) throw error;
//   return data;
// };


//INITIAL CODE
// import { supabase } from "../lib/supabase.js";
// import slugify from "slugify";

// export interface ProductQueryParams {
//   page?: number;
//   limit?: number;
//   category?: string;
//   price_min?: number;
//   price_max?: number;
//   ram?: string;
//   rom?: string;
//   color?: string;
//   search?: string;
//   sortBy?: string;
//   sortOrder?: "asc" | "desc";
// }

// export const fetchProducts = async (params: ProductQueryParams = {}) => {
//   const {
//     page = 1,
//     limit = 20,
//     category,
//     price_min,
//     price_max,
//     ram,
//     rom,
//     search,
//     sortBy = "created_at",
//     sortOrder = "desc",
//   } = params;

//   const from = (page - 1) * limit;
//   const to = from + limit - 1;

//   let query = supabase.from("products").select("*", { count: "exact" });

//   if (category) query = query.ilike("category", category);
//   if (price_min !== undefined) query = query.gte("price", price_min);
//   if (price_max !== undefined) query = query.lte("price", price_max);
//   if (ram) query = query.eq("ram", ram);
//   if (rom) query = query.eq("rom", rom);
//   if (search) query = query.ilike("title", `%${search}%`);

//   query = query.order(sortBy, { ascending: sortOrder === "asc" });
//   query = query.range(from, to);

//   const { data, count, error } = await query;
//   if (error) throw error;
//   return { data, count };
// };

// //Create Product Logic
// export const createProduct = async (product: any) => {
//   const slug = slugify(product.title, { lower: true });
//   const { data, error } = await supabase
//     .from("products")
//     .insert([{ ...product, slug }])
//     .single();
//   if (error) throw error;
//   return data;
// };

// //update Product Logic
// export const updateProduct = async (id: string, product: any) => {
//   let updateData = { ...product };
//   if (product.title) {
//     updateData.slug = slugify(product.title, { lower: true });
//   }
//   const { data, error } = await supabase
//     .from("products")
//     .update(updateData)
//     .eq("id", id)
//     .single();
//   if (error) throw error;
//   return data;
// };