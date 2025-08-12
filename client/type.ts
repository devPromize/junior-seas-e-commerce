export interface HighlightsType {
    _id: number;
    _base: string;
    title: string;
    name: string;
    image: string;
    color: string;
    buttonTitle: string;
  }
  
  export interface CategoryProps {
    _id: number;
    image_url: string;
    title: string;
    _base: string;
    description: string;
  }
  
export interface Product {
  _id: number;
  name: string;
  images: string[];
  description: string;
  price: {
    regular: number;
    discounted: number | null;
  };
  quantity: number;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  colors: string[];
  isStock: boolean;
  isNew: boolean;
  overview: string;
  status: string;
  createdAt: string;
  ram?: string;
  rom?: string;
}


  export interface ProductProps {
    _id: number;
    _base: string;
    reviews: number;
    rating: number;
    quantity: number;
    overView: string;
    name: string;
    isStock: boolean;
    isNew: boolean;
    images: [string];
    discountedPrice: number;
    regularPrice: number;
    description: string;
    colors: [string];
    category: string;
    brand: string;
  }
  
  export interface BlogProps {
    _id: number;
    image: string;
    title: string;
    description: string;
    _base: string;
  }
  
  export interface UserTypes {
    currentUser: {
      firstName: string;
      lastName: string;
      email: string;
      avatar: string;
      id: string;
    };
  }
  
  export interface OrderTypes {
    orderItems: [ProductProps];
    paymentId: string;
    paymentMethod: string;
    userEmail: string;
  }
  

  // auto-detect environment using import.meta.env.MODE, or adding support for dev/staging/prod 
// src/config.ts
// export interface ImportMetaEnv {
//   readonly MODE: string; // e.g., 'development', 'staging', 'production'
// }

// export interface ImportMeta {
//   readonly env: ImportMetaEnv;
// }

// export interface Config {
//   baseUrl: string;
// }