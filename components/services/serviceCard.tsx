import Image, { StaticImageData } from "next/image";
import TextEdtor from "../text-editor/text-editor";

type ServiceCardProps = {
  image?: StaticImageData | string;
  title: string;
  description: string;
};

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    
    <div className="relative overflow-hidden rounded-[5px] px-4 md:px-7 pt-4 md:pt-6 pb-7 md:pb-14 group h-full">
      
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#252525_0%,#050505_100%)]"></div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,#252525_100%,#050505_0%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative z-10">
        {/* Image (optional) */}
      {image && (
        <div className="mb-6 sm:mb-8 max-w-14 sm:max-w-18.5">
          <Image
            src={image}
            alt={title}
            width={74}
            height={65}
            className="h-auto w-full"
          />
        </div>
      )}

      <h5 >
        <TextEdtor description={title}/>
      </h5>

      <p className="mt-3 sm:mt-5 text-[#A0A0A0]">
        {description}
      </p>
      </div>
    </div>
  );
}