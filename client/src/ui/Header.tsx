import { useState, useEffect, useRef } from "react";
import { jsLogo } from "../assets";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { FaChevronDown, FaBars } from "react-icons/fa";
import {
  Menu,
  Transition,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { useCategories } from "../hooks/useCategories";
import HeaderCartIcon from "./HeaderCartIcon";
import HeaderWishlistIcon from "./HeaderWishListIcon";

const headerNavLinks = [
  { title: "Home", to: "/" },
  { title: "Shop", to: "/shop" },
  { title: "Brands", to: "/brands" },
  { title: "Cart", to: "/cart" },
  { title: "Account", to: "/account" },
  { title: "About Us", to: "/about-us" },
  { title: "Contact Us", to: "/contact-us" },
  { title: "Faqs", to: "/faqs" },
];

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  // Use the custom hook to fetch categories
  const { data: categories, isLoading, error } = useCategories();

  // Smart sticky header effect
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          if (currentY <= 0) {
            setShowHeader(true); // Always show at the very top
          } else if (currentY > lastScrollY.current && currentY < 500) {
            setShowHeader(false); // Hide when scrolling down and not far yet
          } else if (currentY > 500) {
            setShowHeader(true); // Show after scrolling further down
          } else if (currentY < lastScrollY.current) {
            setShowHeader(true); // Show when scrolling up
          }
          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest("#mobile-menu") &&
        !target.closest("#hamburger-btn")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <>
      {/* Main header */}
      <div
        className={`w-full bg-[var(--color-white)] sticky top-0 transition-all duration-300 shadow-md z-100 border-b-1 border-b-[var(--color-skyBlue)]
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
        style={{ willChange: "transform" }}
      >
        <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-2 lg:px-0">
          {/* Logo */}
          <Link to="/">
            <img
              src={jsLogo}
              alt="logo"
              className="w-40 sm:w-45 md:w-55  bg-[#FFE0C0] invert rounded-sm p-1"
            />
          </Link>
          {/* Search (Visible on larger screens) */}
          <div className="hidden md:inline-flex max-w-3xl w-[300px] lg:w-full relative">
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              placeholder="Search Products"
              className="w-full flex-1 rounded-sm text-gray-900 text-lg placeholder:text-base 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-[var(--color-navyBlue)] sm:text-sm px-4 py-2"
            />
            {searchText ? (
              <IoClose
                onClick={() => setSearchText("")}
                className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
              />
            ) : (
              <IoSearchOutline className="absolute top-2.5 right-4 text-xl" />
            )}
          </div>

          {/* Menubar */}
          <div className="flex items-center gap-x-6 text-2xl">
            <NavLink
              to="account"
              className={({ isActive }) =>
                isActive ? "active-link" : "text-(--color-navyBlue)"
              }
            >
              <div className="relative group ">
                <RiUserFill className="group-hover:text-(--color-skyBlue) transition-all  duration-200 cursor-pointer  " />
                <div
                  className="absolute top-7 left-1/2 -translate-x-1/2 hidden group-hover:flex items-center justify-center 
            px-1 py-1 bg-(--color-navyBlue) text-white text-[10px] rounded-sm border-(--color-skyBlue) border-1"
                >
                  Account
                </div>
              </div>
            </NavLink>

            <HeaderWishlistIcon />
            <HeaderCartIcon />
          </div>
        </div>

        {/* Navbar with Hamburger Menu */}
        <div className="w-full bg-(--color-navyBlue) text-[var(--color-white)]">
          <Container className="py-1 max-w-4xl flex items-center justify-between">
            {/* Category Dropdown */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="uppercase text-[10px] border-1 font-bold flex items-center gap-1 p-1 hover:text-(--color-columbia-blue) duration-200 cursor-pointer">
                  Select Category <FaChevronDown className="" />
                </MenuButton>
              </div>
              <Transition
                enter="transition-all duration-300"
                enterFrom="opacity-0 scale-y-0"
                enterTo="opacity-100 scale-y-100"
                leave="transition-all duration-200"
                leaveFrom="opacity-100 scale-y-100"
                leaveTo="opacity-0 scale-y-0"
              >
                <MenuItems
                  className="absolute left-1/2 translate-x-[-32%] lg:translate-x-[-50%] mt-1 w-52 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50
                max-h-120 overflow-y-auto transition-all"
                  style={{ transitionProperty: "opacity, transform, max-height" }}
                >
                  {isLoading ? (
                    <MenuItem disabled>
                      <span>Loading...</span>
                    </MenuItem>
                  ) : error ? (
                    <MenuItem disabled>
                      <span>Error loading categories</span>
                    </MenuItem>
                  ) : (
                    categories?.map((item) => (
                      <MenuItem key={item._id}>
                        <Link
                          to={`/category/${item._id}`}
                          className="flex gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <img
                            src={item.image_url || "/placeholder.png"}
                            alt={item.title}
                            className="w-6 h-6 rounded-md"
                          />
                          {item.title}
                        </Link>
                      </MenuItem>
                    ))
                  )}
                </MenuItems>
              </Transition>
            </Menu>

            {/* Hamburger Button (Only visible on mobile) */}
            <button
              id="hamburger-btn"
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>

            {/* Desktop Navigation (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-5">
              {headerNavLinks.map(({ title, to }) => (
                <NavLink
                  key={title}
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "active-link"
                      : "text-[var(--color-white)]/90 hover:text-[var(--color-skyBlue)] duration-200"
                  }
                >
                  <p
                    className="uppercase text-sm font-semibold 
                relative overflow-hidden group cursor-pointer"
                  >
                    {" "}
                    {title}
                  </p>
                </NavLink>
              ))}
            </div>
          </Container>
        </div>
      </div>

      {/* Mobile Menu (Slide-in effect) - moved outside the main header div */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-75 bg-[var(--color-navyBlue)] text-[var(--color-white)] z-1000 shadow-lg 
        transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "rgba(6, 24, 44, 0.95)" }}
      >
        {/* Logo and Close Button */}
        <Link to="/">
          <img
            src={jsLogo}
            alt="logo"
            onClick={() => setMenuOpen(false)}
            className="w-45 invert pl-3 pt-2"
          />
        </Link>
        <button
          className="absolute top-2 right-3 text-2xl hover:bg-red-600 duration-200"
          onClick={() => setMenuOpen(false)}
        >
          <IoClose />
        </button>

        {/* Mobile Search Input */}
        <div className="p-5 mt-2 relative">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search Products"
            className="w-full rounded-sm text-(--color-white) text-lg placeholder:text-base 
              shadow-sm ring-1 ring-(--color-skyBlue) placeholder:text-gray-400 
               sm:text-sm px-4 py-3 focus:bg-(--color-skyBlue)"
          />
          <IoSearchOutline className="absolute top-8 right-8 text-xl " />
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col ">
          {headerNavLinks.map(({ title, to }) => (
            <NavLink
              key={title}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="w-full uppercase text-[12px] font-semibold hover:bg-(--color-skyBlue)
                duration-300 cursor-pointer "
            >
              <p className="pl-5 py-4 text-(--color-white)">{title}</p>
              <div className="h-[0.1px] bg-(--color-skyBlue)/50  "></div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;