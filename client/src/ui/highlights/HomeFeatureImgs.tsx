import { twMerge } from 'tailwind-merge';

interface HomeFeatureImgsProps {
  src: string;  
  alt?: string;
  className?: string;
}
const HomeFeatureImgs = ({src,alt,className}:HomeFeatureImgsProps) => {
  const mergedClassName = twMerge(" rounded-2xl h-auto lg:h-full", className);
  return (
    <div>
      <img src={src} alt={alt} className={mergedClassName}/>
    </div>
  )
}

export default HomeFeatureImgs