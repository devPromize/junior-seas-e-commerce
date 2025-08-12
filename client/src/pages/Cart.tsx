// // src/pages/CartPage.tsx
// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const Cart = () => {
//   const { cartItems, totalPrice, removeFromCart, clearCart } = useCart();

//   return (
//     <section className="min-h-screen px-4 py-8 max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold mb-8 text-[var(--color-navyBlue)]">
//         Your Cart
//       </h1>

//       {cartItems.length === 0 ? (
//         <div className="text-center text-gray-500">
//           <p>Your cart is currently empty.</p>
//           <Link
//             to="/"
//             className="mt-4 inline-block text-[var(--color-skyBlue)] underline"
//           >
//             Continue shopping
//           </Link>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {/* Cart Items */}
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex items-center justify-between p-4 border rounded-md shadow-sm bg-white"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover rounded"
//                 />
//                 <div>
//                   <h2 className="font-medium text-[var(--color-navyBlue)]">
//                     {item.name}
//                   </h2>
//                   <p className="text-sm text-gray-600">
//                     ₦{parseFloat(item.price).toLocaleString()} × {item.quantity}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <span className="text-lg font-semibold text-[var(--color-navyBlue)]">
//                   ₦{(parseFloat(item.price) * item.quantity).toLocaleString()}
//                 </span>
//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <RiDeleteBin6Line size={20} />
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Summary and Actions */}
//           <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="text-xl font-semibold text-[var(--color-navyBlue)]">
//               Total: ₦{totalPrice.toLocaleString()}
//             </div>
//             <div className="flex gap-3">
//               <button
//                 onClick={clearCart}
//                 className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50"
//               >
//                 Clear Cart
//               </button>
//               <button className="px-5 py-2 bg-[var(--color-skyBlue)] text-white rounded hover:opacity-90">
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Cart;



import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartProductCard from "../ui/CartProductCard"

const Cart = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyPromo = () => {
    if (promoCode.toLowerCase() === "izupromo") {
      setDiscount(0.1); // 10% off
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const discountedTotal = totalPrice * (1 - discount);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center py-8">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartProductCard key={item._id} item={item} />
            ))}
          </div>

          <div className="mt-8 border-t pt-4 grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="border px-3 py-2 w-full rounded"
              />
              <button
                onClick={applyPromo}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Apply Code
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded border">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>₦{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Discount:</span>
                <span className="text-green-600">
                  {discount > 0 ? `-₦${(totalPrice * discount).toFixed(2)}` : "₦0.00"}
                </span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>₦{discountedTotal.toFixed(2)}</span>
              </div>

              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="mt-2 w-full border border-red-500 text-red-500 py-2 rounded hover:bg-red-50"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;