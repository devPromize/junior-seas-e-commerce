// // CartContext.tsx
// import { createContext, useContext, useReducer } from "react";

// export interface CartItem {
//   _id: string;
//   name: string;
//   price: string;
//   image: string;
//   quantity: number;
// }

// type Action =
//   | { type: "ADD_TO_CART"; payload: CartItem }
//   | { type: "INCREMENT_QUANTITY"; payload: { _id: string } }
//   | { type: "DECREMENT_QUANTITY"; payload: { _id: string } }
//   | { type: "REMOVE_FROM_CART"; payload: { _id: string } }
//   | { type: "CLEAR_CART" };

// interface CartState {
//   cartItems: CartItem[];
// }

// const initialState: CartState = {
//   cartItems: [],
// };

// const CartContext = createContext<{
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   incrementQuantity: (_id: string) => void;
//   decrementQuantity: (_id: string) => void;
//   removeFromCart: (_id: string) => void;
//   clearCart: () => void;
// } | null>(null);

// // Reducer function
// const cartReducer = (state: CartState, action: Action): CartState => {
//   switch (action.type) {
//     case "ADD_TO_CART": {
//       const exists = state.cartItems.find(item => item._id === action.payload._id);
//       if (exists) {
//         return {
//           cartItems: state.cartItems.map(item =>
//             item._id === action.payload._id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       }
//       return {
//         cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
//       };
//     }

//     case "INCREMENT_QUANTITY": {
//       return {
//         cartItems: state.cartItems.map(item =>
//           item._id === action.payload._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };
//     }

//     case "DECREMENT_QUANTITY": {
//       return {
//         cartItems: state.cartItems
//           .map(item =>
//             item._id === action.payload._id
//               ? { ...item, quantity: item.quantity - 1 }
//               : item
//           )
//           .filter(item => item.quantity > 0),
//       };
//     }

//     case "REMOVE_FROM_CART": {
//       return {
//         cartItems: state.cartItems.filter(item => item._id !== action.payload._id),
//       };
//     }

//     case "CLEAR_CART": {
//       return { cartItems: [] };
//     }

//     default:
//       return state;
//   }
// };

// // Provider
// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const addToCart = (item: CartItem) => {
//     dispatch({ type: "ADD_TO_CART", payload: item });
//   };

//   const incrementQuantity = (_id: string) => {
//     dispatch({ type: "INCREMENT_QUANTITY", payload: { _id } });
//   };

//   const decrementQuantity = (_id: string) => {
//     dispatch({ type: "DECREMENT_QUANTITY", payload: { _id } });
//   };

//   const removeFromCart = (_id: string) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: { _id } });
//   };

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems: state.cartItems,
//         addToCart,
//         incrementQuantity,
//         decrementQuantity,
//         removeFromCart,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used within a CartProvider");
//   return context;
// };

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface CartItem {
  _id: string;
  name: string;
  price: string; // e.g., "29.99"
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (_id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p._id === item._id);
      if (existing) {
        toast.info("Increased quantity in cart");
        return prev.map((p) =>
          p._id === item._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        toast.success("Added to cart");
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (_id: string) => {
    setCartItems((prev) => prev.filter((item) => item._id !== _id));
    toast.warn("Item removed from cart");
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info("Cart cleared");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
