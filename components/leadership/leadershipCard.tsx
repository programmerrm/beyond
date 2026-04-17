import Image, { StaticImageData } from "next/image";

type LeadershipCardProps = {
  image: StaticImageData | string;
  name: string;
  role: string;
  designation: string;
};

export default function LeadershipCard({
  image,
  name,
  role,
  designation,
}: LeadershipCardProps) {
  return (
    <div className="flex flex-col">
      {/* Fixed image size */}
      <div className="relative w-full max-w-63.25 h-75.75 mx-auto overflow-hidden group">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="text-center sm:text-start">
        <h6 className="mt-4 sm:mt-7 text-xl xl:text-2xl xl:leading-[2.1rem] font-bold">{name}</h6>

        <p className="mt-1 text-base xl:text-lg font-normal text-[#C1C1C1] sm:leading-7">
          {role}
        </p>

        <p className="mt-2 sm:mt-4 text-base xl:text-lg font-normal text-[#C1C1C1] sm:leading-7">
          {designation}
        </p>
      </div>
    </div>
  );
}