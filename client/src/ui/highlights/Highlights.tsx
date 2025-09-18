import ProductHighlightBlock from "./ProductHighlightBlock";
import HomeFeatureImgs from "./HomeFeatureImgs";
import {
  AncEarphones,
  homeSmartWatch,
  ukUsedIphone,
  appleAccessories,
  googlePixel9Img,
  s25Ultraimg,
} from "../../assets/index";
import Container from "../Container";
import { useAllHighlights } from "../../hooks/useHighlights";
import ProductGridSkeleton from "../components/ProductGridSkeleton";





interface HighlightSection {
  type: "section";
  key: string;
  title: string;
}

interface HighlightImage {
  type: "image" | "image2";
}

type HighlightItem = HighlightSection | HighlightImage;

const highlightSections: HighlightItem[] = [
  { type: "section", key: "NEW AT JUNIOR SEAS", title: "New at Junior Seas" },
  { type: "image" },
  { type: "section", key: "POPULAR AT JUNIOR SEAS", title: "Popular at Junior Seas" },
  { type: "section", key: "ONLY AT JUNIOR SEAS", title: "Only at Junior Seas" },
  { type: "image2" },
  { type: "section", key: "HOT DEALS AND SALES", title: "Hot Deals & Sales" },
];
const Highlights = () => {
  const { data: highlights, isLoading, isError } = useAllHighlights();

  // While top-level fetch is loading show skeletons for the sections
  if (isLoading) {
    return (
      <div className="space-y-10">
        {highlightSections.map((item, i) => {
          if (item.type === "section") {
            return (
              <div key={item.key ?? i}>
                <h2 className="text-xl md:text-2xl lg:text-3xl md:m-10 font-bold m-5 text-center underline decoration-yellow-500 underline-offset-8">
                  {item.title}.
                </h2>
                <ProductGridSkeleton count={12} />
              </div>
            );
          } else if (item.type === "image") {
            return (
              <div key={`image-${i}`} className="flex flex-col md:flex-row lg:flex-row gap-4 bg-gray-100 p-4 rounded-lg">
                <div className="flex gap-4">
                  <HomeFeatureImgs src={AncEarphones} className="w-full max-w-l" alt="ANC Earphones" />
                  <HomeFeatureImgs src={homeSmartWatch} className="w-full max-w-l" alt="Home Smart Watch" />
                </div>
                <HomeFeatureImgs src={ukUsedIphone} className="w-full lg:col-span-2" alt="UK Used iPhones" />
              </div>
            );
          } else {
            // image2
            return (
              <Container key={`image2-${i}`}>
                <div className="flex gap-4 flex-col md:flex-row">
                  <HomeFeatureImgs src={appleAccessories} className="" alt="appleAccessories" />
                  <HomeFeatureImgs src={googlePixel9Img} className="" alt="ANC Earphones" />
                  <HomeFeatureImgs src={s25Ultraimg} alt="Home Smart Watch" />
                </div>
              </Container>
            );
          }
        })}
      </div>
    );
  }

  if (isError) return <div className="text-center text-red-500">Failed to load highlights</div>;

  // Loaded: pass products for each section (use empty array if none)
  return (
    <div className="space-y-10">
      {highlightSections.map((item, index) => {
        if (item.type === "section") {
          const productsForSection = highlights?.[item.key] ?? []; // pass [] when loaded but empty
          return (
            <ProductHighlightBlock
              key={item.key}
              sectionKey={item.key}
              title={item.title ?? "Default Title"}
              products={productsForSection}
            />
          );
        } else if (item.type === "image") {
          return (
            <div key={`image-${index}`} className="flex flex-col md:flex-row lg:flex-row gap-4 bg-gray-100 p-4 rounded-lg">
              <div className="flex gap-4">
                <HomeFeatureImgs src={AncEarphones} className="w-full max-w-l" alt="ANC Earphones" />
                <HomeFeatureImgs src={homeSmartWatch} className="w-full max-w-l" alt="Home Smart Watch" />
              </div>
              <HomeFeatureImgs src={ukUsedIphone} className="w-full lg:col-span-2" alt="UK Used iPhones" />
            </div>
          );
        } else {
          return (
            <Container key={`image-${index}`}>
              <div className="flex gap-4 flex-col md:flex-row">
                <HomeFeatureImgs src={appleAccessories} className="" alt="appleAccessories" />
                <HomeFeatureImgs src={googlePixel9Img} className="" alt="ANC Earphones" />
                <HomeFeatureImgs src={s25Ultraimg} alt="Home Smart Watch" />
              </div>
            </Container>
          );
        }
      })}
    </div>
  );
};

export default Highlights;
