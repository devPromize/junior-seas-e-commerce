// // components/ProductCard.tsx
// import { FC, useMemo } from "react";
// import { FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishListContext";
// import { useCart } from "../../context/CartContext";

// interface Variant {
//   color: string;
//   ram: string;
//   rom: string;
//   price: number;
//   image: string;
//   stock: number;
// }

// interface Product {
//   image: string | undefined;
//   _id: string;
//   name: string;
//   variants: Variant[];
//   status?: string;
//   inStock?: boolean;
// }

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: FC<ProductCardProps> = ({ product }) => {
//   const { addToCart } = useCart();
//   const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

//   const firstVariant = product.variants?.[0];
//   const wishlistIds = useMemo(() => new Set(wishlistItems.map((item) => item._id)), [wishlistItems]);
//   const isWishlisted = wishlistIds.has(String(product._id));

//   const toggleWishlist = () => {
//     const item = {
//       _id: String(product._id),
//       name: product.name,
//       price: String(firstVariant?.price ?? "0"),
//       image: firstVariant?.image ?? "",
//     };

//     if (isWishlisted) {
//       removeFromWishlist(item._id);
//     } else {
//       addToWishlist(item);
//     }
//   };

//   const prices = product.variants.map((v) => v.price);
//   const minPrice = Math.min(...prices);
//   const maxPrice = Math.max(...prices);
//   const priceLabel =
//     minPrice === maxPrice
//       ? `₦${minPrice.toLocaleString()}`
//       : `₦${minPrice.toLocaleString()} - ₦${maxPrice.toLocaleString()}`;

//   return (
//     <div
//       className="relative flex flex-col justify-between h-full group border rounded p-3 border-(--color-columbia-blue) bg-white 
//         hover:shadow-(--card-box-shadow) hover:transform-(--card-hover-transform) transition-transform duration-400 ease-in-out"
//     >
//       {/* Wishlist Icon */}
//       <span
//         onClick={toggleWishlist}
//         title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
//         className="absolute top-2 right-2 z-10 cursor-pointer group-hover:opacity-100 transition-opacity"
//       >
//         <FaHeart
//           className={
//             isWishlisted
//               ? "text-red-500"
//               : "text-gray-400 hover:text-red-500"
//           }
//         />
//       </span>

//       {/* Status Badge */}
//       {product.status && (
//         <span className="absolute top-2 left-2 z-10 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
//           {product.status}
//         </span>
//       )}

//       {/* Out of Stock Overlay */}
//       {product.inStock === false && (
//         <div className="absolute top-1/2 left-0 w-full text-center transform -translate-y-1/2 z-20">
//           <div className="inline-block bg-black/60 text-white text-sm px-4 py-1 rounded-full">
//             Out of Stock
//           </div>
//         </div>
//       )}

//       {/* Product Image */}
//       <Link to={`/products/${product._id}`}>
//         <img
//           src={firstVariant?.image}
//           alt={product.name}
//           className="w-full h-40 object-contain cursor-pointer mb-1"
//         />
//       </Link>

//       {/* Product Name & Price */}
//       <h3 className="mt-2 font-medium text-sm line-clamp-2 h-[3rem]">{product.name}</h3>
//       <p className="text-sm text-gray-600">{priceLabel}</p>

//       {/* Actions */}
//       <div className="mt-3 flex gap-2">
//         <Link
//           to={`/products/${product._id}`}
//           className="flex-1 text-center py-1 px-2 text-sm border border-(--color-navyBlue) bg-(--color-white) text-(--color-navyBlue) rounded hover:border-(--color-navyBlue)/90"
//         >
//           View
//         </Link>
//         <button
//           onClick={() =>
//             addToCart({
//               ...product,
//               _id: String(product._id),
//               quantity: 1,
//               price: String(firstVariant?.price ?? ""),
//               image: firstVariant?.image ?? "",
//             })
//           }
//           className="flex-1 py-1 px-2 text-sm bg-(--color-navyBlue) text-white rounded hover:bg-(--color-navyBlue)/90"
//         >
//           Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import { FC } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishListContext";

interface Variant {
  color: string;
  ram: string;
  rom: string;
  price: number;
  image: string;
  stock: number;
}

interface Product {
  image?: string;
  _id: string;
  name: string;
  variants: Variant[] | null;
  status?: string;
  in_stock?: boolean;
}


interface Props {
  product: Product;
  isWishlisted: boolean;
}

const ProductCard: FC<Props> = ({ product, isWishlisted }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist } = useWishlist();

  const firstVariant = product.variants?.[0];
  const prices = (product.variants ?? []).map((v) => v.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceLabel =
    minPrice === maxPrice
      ? `₦${minPrice.toLocaleString()}`
      : `₦${minPrice.toLocaleString()} - ₦${maxPrice.toLocaleString()}`;

  const toggleWishlist = () => {
    const item = {
      _id: String(product._id),
      name: product.name,
      price: String(firstVariant?.price ?? "0"),
      image: firstVariant?.image ?? "",
    };

    isWishlisted ? removeFromWishlist(item._id) : addToWishlist(item);
  };

  return (
    <div className="relative flex flex-col justify-between h-full group border rounded p-3 border-(--color-columbia-blue) bg-white hover:shadow-(--card-box-shadow) hover:transform-(--card-hover-transform) transition-transform duration-400 ease-in-out">
      {/* Wishlist Icon */}
      <span
        onClick={toggleWishlist}
        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        className="absolute top-2 right-2 z-10 cursor-pointer group-hover:opacity-100 transition-opacity"
      >
        <FaHeart
          className={
            isWishlisted ? "text-red-500" : "text-gray-400 hover:text-red-500"
          }
        />
      </span>

      {/* Status Badge */}
      {product.status && (
        <span className="absolute top-2 left-2 z-10 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {product.status}
        </span>
      )}

      {/* Out of Stock */}
      {product.in_stock === false && (
        <div className="absolute top-1/2 left-0 w-full text-center transform -translate-y-1/2 z-20">
          <div className="inline-block bg-black/60 text-white text-sm px-4 py-1 rounded-full">
            Out of Stock
          </div>
        </div>
      )}

      <Link to={`/products/${product._id}`}>
        <img
          src={firstVariant?.image}
          alt={product.name}
          className="w-full h-40 object-contain cursor-pointer mb-1"
        />
      </Link>

      <h3 className="mt-2 font-medium text-sm line-clamp-2 h-[3rem]">{product.name}</h3>
      <p className="text-sm text-gray-600">{priceLabel}</p>

      <div className="mt-3 flex gap-2">
        <Link
          to={`/products/${product._id}`}
          className="flex-1 text-center py-1 px-2 text-sm border border-(--color-navyBlue) bg-(--color-white) text-(--color-navyBlue) rounded hover:border-(--color-navyBlue)/90"
        >
          View
        </Link>
        <button
          onClick={() =>
            addToCart({
              ...product,
              _id: String(product._id),
              quantity: 1,
              price: "",
              image: "",
            })
          }
          className="flex-1 py-1 px-2 text-sm bg-(--color-navyBlue) text-white rounded hover:bg-(--color-navyBlue)/90"
        >
          Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
