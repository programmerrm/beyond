type ProcessCardProps = {
  number?: number;
  title: string;
  description: string;
};

export default function ProcessCard({
  number,
  title,
  description,
}: ProcessCardProps) {
  return (

    <div className="relative overflow-hidden rounded-[5px] px-4 md:px-8 pt-2 md:pt-4 pb-6 md:pb-12 group h-full">

      <div className="absolute inset-0 bg-[linear-gradient(180deg,#252525_0%,#050505_100%)]"></div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,#252525_100%,#050505_0%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative z-10">

        {number !== undefined && (
          <span className="block text-5xl md:text-[70px] font-bold text-[#3D3D3D] md:leading-24.5">
            {number}
          </span>
        )}

        <h5 className="mt-2 sm:mt-3.5 text-white text-xl sm:text-[30px] sm:leading-7.5 font-bold font-inter">
          {title}
        </h5>

        <p className="mt-2 sm:mt-3 text-base sm:text-lg text-[#C1C1C1] sm:leading-7">
          {description}
        </p>

      </div>
    </div>
  );
}