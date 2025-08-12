// import React from "react";
import Container from "./Container";
import {jsLogo} from "../assets";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import {
  bankTransferIcon,
  bitcoinIcon,
  masterCardIcon,
  visaIcon,
} from "../assets";
import { Link } from "react-router-dom";

const customerService = [
  { title: "Warranty", to: "/warranty" },
  { title: "Payments", to: "/payments" },
  { title: "Delivery", to: "/delivery" },
  { title: "Returns", to: "/returns" },
];
const myAccount = [
  { title: "Login/Register", to: "/account/login-register" },
  { title: "Orders", to: "/account/orders" },
  { title: "Wishlist", to: "/wishlist" },
  { title: "Saved Address", to: "/account/saved-address" },
];

const support = [
  { title: "About Us", to: "/about-us" },
  { title: "Contact Us", to: "/contact-us" },
  { title: "Faqs", to: "/faqs" },
];

{/* <div className="flex gap-4  ">
<p className="text-(--color-white)">
  <img
    src={expressDeliveryIcon}
    alt="payment-img"
    className="w-20 invert"
  />
  Express Delivery
</p>
<p className="text-(--color-white)">
  <img src={returnIcon} alt="payment-img" className="w-10 invert" />
  Fuss Free Returns
</p>
<p className="text-(--color-white)">
  <img
    src={customerSupportIcon}
    alt="payment-img"
    className="w-10 "
  />
  24/7 Support
</p>
</div> */}

const Footer = () => {
  return (
    <div className="bg-(--color-navyBlue) text-(--color-white)">
      <Container
        className="flex flex-col md:flex-row 
       gap-5  justify-around"
      >
        <div className="flex flex-col justify-start mb-7">
          <div>
            <img src={jsLogo} alt="logo" className="w-50 invert" />
            <div className="flex flex-col sm:flex-row">
              <p>
                20, Urata/Mann Street, Off Wetheral Road. <br /> Owerri, Imo
                state, <br />
                Nigeria.
              </p>
              <div className="h-[0.1px] bg-(--color-skyBlue)/50 w-[150px] my-5 sm:w-[0.1px] sm:h-[75px] sm:mx-5 sm:my-0 "></div>
              <p>
                12, Tetlow Road. <br /> Owerri, Imo
                state, <br />
                Nigeria.
              </p>
            </div>
          </div>
          <div className="py-2">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-xl text-blue-500" />
              <span>juniorseas@email.com</span>
            </div>
            <div className="flex items-center space-x-2 pt-1">
              <FaPhone className="text-xl text-green-500" />
              <span>+123 456 7890</span>
            </div>
          </div>
        </div>

      <div className="flex justify-between gap-5 md:gap-10">
        <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Account</h1> 
          {myAccount.map(({title, to })=>
          (
            <Link 
            key={title} 
            to={to}
            className="text-sm font-semibold text-[var(--color-white)]/70 hover:text-[var(--color-white)] hover:underline
            duration-200 relative overflow-hidden group cursor-pointer">
              {title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
         <h1 className="text-xl font-bold">Services</h1> 
        {customerService.map(({ title, to }) => (
          <Link
            key={title}
            to={to}
            className="text-sm font-semibold text-[var(--color-white)]/70 hover:text-[var(--color-white)] hover:underline
                        duration-200 relative overflow-hidden group cursor-pointer"
          >
            {title}
          </Link>
        ))}
        </div>
        <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Support</h1> 
        {support.map(({ title, to }) => (
          
          <Link
            key={title}
            to={to}
            className="text-sm font-semibold text-[var(--color-white)]/70 hover:text-(--color-white) hover:underline
                        duration-200 relative overflow-hidden group cursor-pointer"
          >
            {title}
           
          </Link>
        ))}
        </div>
        </div>
      </Container>
      <Container>
      <div className="h-0.5 bg-(--color-skyBlue)/50 w-full"></div>
      <div className="flex flex-col gap-5 items-center sm:flex-row justify-around md:flex-row pt-4">
          <p>@2025 Junior Seas. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl text-blue-700 hover:text-blue-500 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-pink-600 hover:text-pink-400 transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-blue-500 hover:text-blue-400 transition" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl text-green-500 hover:text-green-400 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl text-blue-400 hover:text-blue-300 transition" />
            </a>
          </div>
          <div className="uppercase flex gap-3 hover:cursor-pointer">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </Container>
      <Container className="pb-5 px-0">
        <div className="flex items-center justify-center gap-4 invert pt-4 md:justify-end">
            <img src={bankTransferIcon} alt="payment-img" className="w-7" />
            <img src={bitcoinIcon} alt="payment-img" className="w-7 " />
            <img src={visaIcon} alt="payment-img" className="w-7" />
            <img src={masterCardIcon} alt="payment-img" className="w-7" />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
