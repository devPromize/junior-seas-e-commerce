import { NavLink } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { useCart } from '../context/CartContext';
const HeaderCartIcon = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <NavLink
      to="/cart"
      className={({ isActive }) =>
        isActive ? "active-link" : "text-[var(--color-navyBlue)]"
      }
    >
      <div className="relative group">
        <RiShoppingCartFill className="hover:text-[var(--color-skyBlue)] duration-200 cursor-pointer" />
        <span
          className="absolute -top-1 -right-2 bg-red-600 text-[var(--color-white)] text-[10px] 
        rounded-full w-3.5 flex items-center justify-center"
        >
          {totalQuantity}
        </span>
        <div
          className="absolute top-7 left-1/2 -translate-x-1/2 hidden group-hover:flex items-center justify-center 
        px-1 py-1 bg-[var(--color-navyBlue)] text-white text-[10px] rounded-sm border border-[var(--color-skyBlue)]"
        >
          Cart
        </div>
      </div>
    </NavLink>
  );
};

export default HeaderCartIcon;