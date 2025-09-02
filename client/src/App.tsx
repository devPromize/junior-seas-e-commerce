import FeedCarousel from "./ui/FeedCarousel";
import GoogleReviews from "./ui/GoogleReviews";
import HeroCarousel from "./ui/HeroCarousel";
import Perks from "./ui/Perks";
import Highlights from "./ui/highlights/Highlights";
function App() {
  return (
    <main>
      <HeroCarousel />
      <Perks />
      <Highlights />
      <FeedCarousel />
      <GoogleReviews />
    </main>
  );
}

export default App;

// import { motion } from "framer-motion";
// import { fadeInVariant } from "./animations/fadeIn"; // ✅ Reusable variant
// import FeedCarousel from "./ui/FeedCarousel";
// import GoogleReviews from "./ui/GoogleReviews";
// import HeroCarousel from "./ui/HeroCarousel";
// import Perks from "./ui/Perks";
// import Highlights from "./ui/highlights/Highlights";

// function App() {
//   return (
//     <main className="space-y-16">
//       {/* Hero Section */}
//       <motion.div
//         variants={fadeInVariant}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <HeroCarousel />
//       </motion.div>

//       {/* Perks Section */}
//       <motion.div
//         variants={fadeInVariant}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <Perks />
//       </motion.div>

//       {/* Highlights Section */}
//       <motion.div
//         style={{ background: "yellow", height: "200px" }}
//         variants={fadeInVariant}
//         initial="hidden"
//          animate="visible" // ✅ Forces it visible without scroll detection
       
//       >
//         <Highlights />
//       </motion.div>

//       {/* Feed Carousel Section */}
//       <motion.div
//         variants={fadeInVariant}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <FeedCarousel />
//       </motion.div>

//       {/* Google Reviews Section */}
//       <motion.div
//         variants={fadeInVariant}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <GoogleReviews />
//       </motion.div>
//     </main>
//   );
// }

// export default App;
