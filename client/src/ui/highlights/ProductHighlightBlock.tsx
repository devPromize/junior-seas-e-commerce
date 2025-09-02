// import { useHighlights } from "../../hooks/useHighlights";
// import { FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Container from "../Container";
// import { useCart } from "../../context/CartContext";
// import { useWishlist } from "../../context/WishListContext";
// import { useMemo } from "react";

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

// interface Props {
//   sectionKey: string;
//   title: string;
// }

// const ProductHighlightBlock = ({ sectionKey, title }: Props) => {
//   const { data, isLoading, error } = useHighlights(sectionKey);
//   const { addToCart } = useCart();
//   const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

//   // ✅ Memoize wishlist IDs once (legal placement of useMemo)
//   const wishlistIds = useMemo(() => {
//     return new Set(wishlistItems.map((item) => item._id));
//   }, [wishlistItems]);

//   return (
//     <Container>
//       <section>
//         <h2 className="text-xl md:text-2xl lg:text-3xl md:m-10 font-bold m-5 text-center underline decoration-yellow-500 underline-offset-8">
//           {title}.
//         </h2>

//         {isLoading ? (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {[...Array(4)].map((_, i) => (
//               <div key={i} className="h-40 bg-gray-200 animate-pulse rounded" />
//             ))}
//           </div>
//         ) : error ? (
//           <p className="text-red-500">Failed to load {title}</p>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {data.map((product: Product) => {
//               const isWishlisted = wishlistIds.has(String(product._id));

//               const toggleWishlist = () => {
//                 const firstVariant = product.variants?.[0];
//                 const item = {
//                   _id: String(product._id),
//                   name: product.name,
//                   price: String(firstVariant?.price ?? "0"),
//                   image: firstVariant?.image ?? "",
//                 };

//                 if (isWishlisted) {
//                   removeFromWishlist(item._id);
//                 } else {
//                   addToWishlist(item);
//                 }
//               };
//               const prices = product.variants.map((v) => v.price);
//               const minPrice = Math.min(...prices);
//               const maxPrice = Math.max(...prices);
//               const priceLabel =
//                 minPrice === maxPrice
//                   ? `₦${minPrice.toLocaleString()}`
//                   : `₦${minPrice.toLocaleString()} - ₦${maxPrice.toLocaleString()}`;

//               return (
//                 <div
//                   key={product._id}
//                   className="relative flex flex-col justify-between h-full group border rounded p-3 border-(--color-columbia-blue) bg-white 
//                    hover:shadow-(--card-box-shadow) hover:transform-(--card-hover-transform) transition-transform duration-400 ease-in-out"
//                 >
//                   {/* Wishlist Icon */}
//                   <span
//                     onClick={toggleWishlist}
//                     title={
//                       isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"
//                     }
//                     className="absolute top-2 right-2 z-10 cursor-pointer group-hover:opacity-100 transition-opacity"
//                   >
//                     <FaHeart
//                       className={
//                         isWishlisted
//                           ? "text-red-500"
//                           : "text-gray-400 hover:text-red-500"
//                       }
//                     />
//                   </span>

//                   {/* Cylindrical Status Badge */}
//                   {product.status && (
//                     <span className="absolute top-2 left-2 z-10 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
//                       {product.status}
//                     </span>
//                   )}

//                   {/* Out of Stock Overlay */}
//                   {product.inStock === false && (
//                     <div className="absolute top-1/2 left-0 w-full text-center transform -translate-y-1/2 z-20">
//                       <div className="inline-block bg-black/60 text-white text-sm px-4 py-1 rounded-full ">
//                         Out of Stock
//                       </div>
//                     </div>
//                   )}

//                   {/* Product Image */}
//                   <Link to={`/products/${product._id}`}>
//                     <img
//                       src={product.variants?.[0]?.image}
//                       alt={product.name}
//                       className="w-full h-40 object-contain cursor-pointer mb-1"
//                     />
//                   </Link>

//                   {/* Name and Price */}
//                   <h3 className="mt-2 font-medium text-sm line-clamp-2 h-[3rem]">
//                     {product.name}
//                   </h3>
//                   <p className="text-sm text-gray-600"> {priceLabel}</p>

//                   {/* Hover Action Buttons */}
//                   <div className="mt-3 flex gap-2">
//                     <Link
//                       to={`/products/${product._id}`}
//                       className="flex-1 text-center py-1 px-2 text-sm border border-(--color-navyBlue) bg-(--color-white) text-(--color-navyBlue) rounded hover:border-(--color-navyBlue)/90"
//                     >
//                       View
//                     </Link>
//                     <button
//                       onClick={() =>
//                         addToCart({
//                           ...product,
//                           _id: String(product._id),
//                           quantity: 1,
//                           price: "",
//                           image: "",
//                         })
//                       }
//                       className="flex-1 py-1 px-2 text-sm bg-(--color-navyBlue) text-white rounded hover:bg-(--color-navyBlue)/90"
//                     >
//                       Cart
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </section>
//     </Container>
//   );
// };

// export default ProductHighlightBlock;







import { useHighlights } from "../../hooks/useHighlights";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../Container";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishListContext";
import { useMemo } from "react";
import ProductGridSkeleton from "../components/ProductGridSkeleton";

interface Variant {
  color: string;
  ram: string;
  rom: string;
  price: number;
  image: string;
  stock: number;
}

interface Product {
  image: string | undefined;
  _id: string;
  name: string;
  variants: Variant[];
  status?: string;
  inStock?: boolean;
}

interface Props {
  sectionKey: string;
  title: string;
}

const ProductHighlightBlock = ({ sectionKey, title }: Props) => {
  const { data, isLoading, error } = useHighlights(sectionKey);
  const { addToCart } = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

  // ✅ Memoize wishlist IDs
  const wishlistIds = useMemo(() => {
    return new Set(wishlistItems.map((item) => item._id));
  }, [wishlistItems]);

  return (
    <Container>
      <section>
        <h2 className="text-xl md:text-2xl lg:text-3xl md:m-10 font-bold m-5 text-center underline decoration-yellow-500 underline-offset-8">
          {title}.
        </h2>

        {isLoading ? (
          <ProductGridSkeleton count={12} />
        ) : error ? (
          <p className="text-red-500">Failed to load {title}</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((product: Product) => {
              const isWishlisted = wishlistIds.has(String(product._id));

              const toggleWishlist = () => {
                const firstVariant = product.variants?.[0];
                const item = {
                  _id: String(product._id),
                  name: product.name,
                  price: String(firstVariant?.price ?? "0"),
                  image: firstVariant?.image ?? "",
                };

                if (isWishlisted) {
                  removeFromWishlist(item._id);
                } else {
                  addToWishlist(item);
                }
              };

              // ✅ Calculate Price Range
              const prices = product.variants.map((v) => v.price);
              const minPrice = Math.min(...prices);
              const maxPrice = Math.max(...prices);
              const priceLabel =
                minPrice === maxPrice
                  ? `₦${minPrice.toLocaleString()}`
                  : `₦${minPrice.toLocaleString()} - ₦${maxPrice.toLocaleString()}`;

              // ✅ Check if Out of Stock (product.inStock === false OR all variants stock = 0)
              const isOutOfStock =
                product.inStock === false ||
                product.variants.every((variant) => variant.stock === 0);

              return (
                <div
                  key={product._id}
                  className="relative flex flex-col justify-between h-full group border rounded p-3 border-(--color-columbia-blue) bg-black/1 
                   hover:shadow-(--card-box-shadow) hover:transform-(--card-hover-transform) transition-transform duration-400 ease-in-out"
                >
                  {/* Wishlist Icon */}
                  <span
                    onClick={toggleWishlist}
                    title={
                      isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"
                    }
                    className="absolute top-2 right-2 z-10 cursor-pointer group-hover:opacity-100 transition-opacity"
                  >
                    <FaHeart
                      className={
                        isWishlisted
                          ? "text-red-500"
                          : "text-gray-400 hover:text-red-500"
                      }
                    />
                  </span>

                  {/* Cylindrical Status Badge */}
                  {product.status && (
                    <span className="absolute top-2 left-2 z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {product.status}
                    </span>
                  )}

                  {/* ✅ Out of Stock Overlay */}
                  {isOutOfStock && (
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-20 flex items-center justify-center ">
                      <span className="bg-red-700/80 text-white whitespace-nowrap text-sm px-10 py-5 rounded-sm shadow-lg">
                        Out of Stock
                      </span>
                    </div>
                  )}

                  {/* Product Image */}
                  <Link to={`/products/${product._id}`}>
                    <img
                      src={product.variants?.[0]?.image}
                      alt={product.name}
                      className="w-full h-40 object-contain cursor-pointer mb-1"
                    />
                  </Link>

                  {/* Name and Price */}
                  <h3 className="mt-2 font-medium text-sm line-clamp-2 h-[3rem]">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600"> {priceLabel}</p>

                  {/* Hover Action Buttons */}
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
                      disabled={isOutOfStock} // ✅ Disable if out of stock
                      className={`flex-1 py-1 px-2 text-sm rounded ${
                        isOutOfStock
                          ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                          : "bg-(--color-navyBlue) text-white hover:bg-(--color-navyBlue)/90"
                      }`}
                    >
                      Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </Container>
  );
};

export default ProductHighlightBlock;
