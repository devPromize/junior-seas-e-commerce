
// import expressDeliveryIcon from "../assets/icons/expressDeliveryIcon.png";
// import returnIcon from "../assets/icons/returnIcon.png";
// import customerSupportIcon from "../assets/icons/customerSupportIcon.png";
// import { Link } from "react-router-dom";

// const Perks = () => {
//   return (
//     <div className="flex gap-5 items-center justify-center  p-4 mt-5">
//       <Link to="/delivery" className="flex flex-col items-center justify-center gap-2  text-center break-words text-xs md:text-sm">
//         <img src={expressDeliveryIcon} alt="payment-img" className="w-20 " />
//         <h1 className="font-bold">Fast Delivery</h1>
//         <p className="text-center break-words">Have your items delivered conveniently to your preferred location.</p>
//       </Link>
//       <Link to="/returns" className="flex flex-col items-center justify-center  gap-2  text-center break-words text-xs md:text-sm">
//         <img src={returnIcon} alt="payment-img" className="w-10 " />
//         <h1 className="font-bold">Hassle-Free Returns</h1>
//         <p className="text-center ">Easily return items that don't work as stated.</p>
//       </Link>
//       <Link to="/contact-us" className="flex flex-col items-center justify-center gap-2 text-center break-words text-xs md:text-sm">
//         <img src={customerSupportIcon} alt="payment-img" className="w-10 " />
//         <h1 className="font-bold">24/7 Customer Support</h1>
//         <p className="text-center ">Get help and find answers to questions instantly.</p>
//       </Link>
//     </div>
//   );
// };

// export default Perks;



import expressDeliveryIcon from "../assets/icons/expressDeliveryIcon.png";
import returnIcon from "../assets/icons/returnIcon.png";
import customerSupportIcon from "../assets/icons/customerSupportIcon.png";
import { Link } from "react-router-dom";

const perks = [
  {
    icon: expressDeliveryIcon,
    title: "Fast Delivery",
    description: "Have your items delivered conveniently to your preferred location.",
    link: "/delivery",
    iconSize: "w-20",
  },
  {
    icon: returnIcon,
    title: "Hassle-Free Returns",
    description: "Easily return items that don't work as stated.",
    link: "/returns",
    iconSize: "w-10",
  },
  {
    icon: customerSupportIcon,
    title: "24/7 Customer Support",
    description: "Get help and find answers to questions instantly.",
    link: "/contact-us",
    iconSize: "w-10",
  },
];

const Perks = () => {
  return (
    <div className="flex gap-5 items-center justify-between p-7 mt-0 
        hover:shadow-(--card-box-shadow) hover:transform-(--card-hover-transform) transition-transform duration-400 ease-in-out
         bg-white/50 backdrop-blur-sm border border-black/10 ">
      {perks.map((perk, index) => (
        <Link
          to={perk.link}
          key={index}
          className="flex flex-col items-center justify-center gap-2 text-center break-words text-xs md:text-sm"
        >
          <img src={perk.icon} alt={perk.title} className={perk.iconSize} />
          <h1 className="font-bold text-black/75 hover:text-(--color-black) duration-200">{perk.title}</h1>
          <p className="text-center text-black/75 hover:text-(--color-black) duration-200">{perk.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default Perks;
