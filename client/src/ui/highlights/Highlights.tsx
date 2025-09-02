// import { motion } from "framer-motion"; //Wrong !! REMOVE.
import ProductHighlightBlock from "./ProductHighlightBlock";
import HomeFeatureImgs from "./HomeFeatureImgs";
import {
  AncEarphones,
  homeSmartWatch,
  ukUsedIphone,
  appleAccessories,
  googlePixel9Img,
  s25Ultraimg,
} from "../../assets/index"; // ✅ import your image
import Container from "../Container";

const highlightSections = [
  { type: "section", key: "NEW AT JUNIOR SEAS", title: "New at Junior Seas" },
  { type: "image" },
  {
    type: "section",
    key: "POPULAR AT JUNIOR SEAS",
    title: "Popular at Junior Seas",
  },

  { type: "section", key: "ONLY AT JUNIOR SEAS", title: "Only at Junior Seas" },
  { type: "image2" },
  { type: "section", key: "HOT DEALS AND SALES", title: "Hot Deals & Sales" },
];

const Highlights = () => {
  return (
    <div className="space-y-10">
      {highlightSections.map((item, index) => {
        if (item.type === "section") {
          return (
        
              <ProductHighlightBlock
              key={item.key}
              sectionKey={item.key ?? "default-key"}
              title={item.title ?? "Default Title"}
            />
           
            
          );
        } else if (item.type === "image") {
          return (
            
              <div key={`image-${index}`} className="flex flex-col md:flex-row lg:flex-row gap-4 bg-gray-100 p-4 rounded-lg">
                <div className="flex gap-4">
                  <HomeFeatureImgs
                    src={AncEarphones}
                    className="w-full max-w-l"
                    alt="ANC Earphones"
                  />
                  <HomeFeatureImgs
                    src={homeSmartWatch}
                    className="w-full max-w-l"
                    alt="Home Smart Watch"
                  />
                </div>

                <HomeFeatureImgs
                  src={ukUsedIphone}
                  className="w-full lg:col-span-2"
                  alt="UK Used iPhones"
                />
              </div>
            
          );
        } else if (item.type === "image2") {
          return (
            <Container>
              <div
                key={`image-${index}`}
                className="flex gap-4 flex-col md:flex-row"
              >
                <HomeFeatureImgs
                  src={appleAccessories}
                  className=""
                  alt="appleAccessories"
                />
                <HomeFeatureImgs
                  src={googlePixel9Img}
                  className=""
                  alt="ANC Earphones"
                />
                <HomeFeatureImgs src={s25Ultraimg} alt="Home Smart Watch" />
              </div>
            </Container>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Highlights


