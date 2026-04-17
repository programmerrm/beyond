type SystemCardProps = {
  title: string;
  capabilities: string[];
};

export default function SecurityCard({
  
  title,
  capabilities,
}: SystemCardProps) {
  return (
    <div className="relative rounded-[10px] p-px bg-[linear-gradient(270deg,#FCE172_0%,#9747FF_100%)] h-full">
      <div className="rounded-[10px] bg-[#222222] h-full">
        <div className="p-5 lg:p-10 text-white">
          
          {/* Title */}
          <h5>
            {title}
          </h5>

          <ul className="mt-2 sm:mt-5 list-disc pl-8 text-base sm:text-lg sm:leading-[25.2px] text-[#B2B2B2]">
            {capabilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}