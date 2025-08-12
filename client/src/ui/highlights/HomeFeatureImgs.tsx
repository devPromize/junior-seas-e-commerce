// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import { ip16 } from "../assets";

// const InteractiveShrinkImage = () => {
//     const { scrollY } = useScroll();
//     const [isMobile, setIsMobile] = useState(false);
  
//     useEffect(() => {
//       const handleResize = () => {
//         setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
//       };
  
//       handleResize(); // Set initially
//       window.addEventListener("resize", handleResize);
  
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);
  
//     // Map scroll position (0px to 300px) to scale values (1 to 0.6)
//     const scaleY = useTransform(scrollY, [0, 300], [1, 0.6]);
//     const scaleX = useTransform(scrollY, [0, 300], [1, 0.6]);
//     const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
//     return (
//       <div className="h-[400px] flex justify-center items-center overflow-hidden">
//         <motion.img
//           src={ip16}
//           alt="Shrinking Hero"
//           style={{
//             scaleY: isMobile ? scaleY : undefined,
//             scaleX: isMobile ? undefined : scaleX,
//             // opacity,
//           }}
//           className="object-cover w-full h-full"
//         />
//       </div>
//     );
// }

// export default InteractiveShrinkImage;



// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";

// interface InteractiveShrinkImageProps {
//   src: string;
//   alt?: string;
// }

// const InteractiveShrinkImage = ({ src, alt = "Shrink Image" }: InteractiveShrinkImageProps) => {
//   const { scrollY } = useScroll();
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const scaleY = useTransform(scrollY, [0, 300], [1, 0.6]);
//   const scaleX = useTransform(scrollY, [0, 300], [1, 0.6]);
// //   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

//   return (
//     <motion.div
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ duration: 1 }} // (optional) make it fade over 1 second
//   className="h-[400px] flex justify-center items-center overflow-hidden bg-[#0C1C48]
// " // bg-blue-500 = Tailwind blue
// >
//       <motion.img
//         src={src}
//         alt={alt}
//         style={{
//           scaleY: isMobile ? scaleY : undefined,
//           scaleX: isMobile ? undefined : scaleX,
//         }}
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         className="object-cover w-full h-full"
//       />
//     </motion.div>
//   );
// };
// // React<motion.div whileInView={{ opacity: 1 }} />
// export default InteractiveShrinkImage;



// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// interface InteractiveShrinkImageProps {
//   src: string;
//   alt?: string;
//   minHeight?: number;
//   maxHeight?: number;
//   minWidth?: number;
//   maxWidth?: number;
// }

// const InteractiveShrinkImage = ({
//   src,
//   alt = "Shrink Image",
//   minHeight = 80,
//   maxHeight = 400,
//   minWidth = 150,
//   maxWidth = 800,
// }: InteractiveShrinkImageProps) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll();
//   const [isMobile, setIsMobile] = useState(false);
//   const [containerTop, setContainerTop] = useState(0);

//   useEffect(() => {
//     // Detect screen size
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);

//     // Measure container position
//     if (containerRef.current) {
//       const { top } = containerRef.current.getBoundingClientRect();
//       setContainerTop(top + window.scrollY);
//     }

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Transform scroll into dynamic height or width
//   const height = useTransform(
//     scrollY,
//     [containerTop, containerTop + 300],
//     [maxHeight, minHeight]
//   );

//   const width = useTransform(
//     scrollY,
//     [containerTop, containerTop + 300],
//     [maxWidth, minWidth]
//   );

//   return (
//     <motion.div
//       ref={containerRef}
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="flex justify-center items-center w-full overflow-hidden bg-[#0C1C48]"
//     >
//       <motion.img
//         src={src}
//         alt={alt}
//         className="object-cover"
//         style={{
//           height: isMobile ? height : "auto",
//           width: isMobile ? "auto" : width,
//         }}
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//       />
//     </motion.div>
//   );
// };

// export default InteractiveShrinkImage;







// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// interface InteractiveShrinkImageProps {
//   src: string;
//   alt?: string;
//   minHeight?: number;
//   maxHeight?: number;
//   minWidth?: number;
//   maxWidth?: number;
// }

// const InteractiveShrinkImage = ({
//   src,
//   alt = "Shrink Image",
//   minHeight = 80,
//   maxHeight = 500,
//   minWidth = 150,
//   maxWidth = 800,
// }: InteractiveShrinkImageProps) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll();
//   const [isMobile, setIsMobile] = useState(false);
//   const [containerTop, setContainerTop] = useState(0);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     if (containerRef.current) {
//       const { top } = containerRef.current.getBoundingClientRect();
//       setContainerTop(top + window.scrollY);
//     }
//   }, []);

//   const height = useTransform(scrollY, [containerTop, containerTop + 300], [maxHeight, minHeight]);
//   const width = useTransform(scrollY, [containerTop, containerTop + 300], [maxWidth, minWidth]);

//   return (
//     <div
//       ref={containerRef}
//       className="flex justify-center items-center w-full overflow-hidden bg-[#0C1C48] h-[400px]"
//     >
//       <motion.img
//         src={src}
//         alt={alt}
//         style={{
//           height: isMobile ? height : "auto",
//           width: isMobile ? "auto" : width,
//         }}
//         className="object-contain"
//       />
//     </div>
//   );
// };

// export default InteractiveShrinkImage;


import { twMerge } from 'tailwind-merge';

interface HomeFeatureImgsProps {
  src: string;  
  alt?: string;
  className?: string;
}
const HomeFeatureImgs = ({src,alt,className}:HomeFeatureImgsProps) => {
  const mergedClassName = twMerge(" rounded-2xl h-full", className);
  return (
    <div>
      <img src={src} alt={alt} className={mergedClassName}/>
    </div>
  )
}

export default HomeFeatureImgs