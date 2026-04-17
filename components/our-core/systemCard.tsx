import TextEdtor from "../text-editor/text-editor";

type SystemCardProps = {
  badge: string;
  title: string;
  description: string;
  capabilitiesTitle: string;
  capabilities: string[];
  impactTitle: string;
  impact: string[];
};

export default function SystemCard({
  badge,
  title,
  description,
  capabilitiesTitle,
  capabilities,
  impactTitle,
  impact,

}: SystemCardProps) {
  return (
    <div className="relative rounded-[10px] p-px bg-[linear-gradient(270deg,#FCE172_0%,#9747FF_100%)] h-full">
      <div className="bg-[#222222] h-full rounded-[10px]">
        <div className="rounded-[10px] bg-black h-full ">
          <div className="p-5 lg:p-10 text-white">
            {/* Badge */}
            <div className="inline-block rounded-full p-px bg-[linear-gradient(270deg,#FCE172_0%,#9747FF_100%)] mb-5">
              <div className="rounded-full bg-[#222222]">
                <h6 className="px-4 sm:px-5 py-1 sm:py-2 text-lg sm:text-xl sm:leading-8 font-normal">
                  {badge}
                </h6>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-[30px] font-bold md:leading-10">
              {title}
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg sm:leading-[25.2px] mt-2 text-[#B2B2B2]">
              {description}
            </p>

            {/* Capabilities */}
            <h6 className="mt-6 text-base sm:text-lg sm:leading-[25.2px] text-[#B2B2B2] font-bold">
              {capabilitiesTitle}
            </h6>
            <ul className="mt-2 list-disc pl-8 text-base sm:text-lg sm:leading-[25.2px] text-[#B2B2B2]">
              {capabilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Impact */}
            <h6 className="mt-6 text-base sm:text-lg sm:leading-[25.2px] font-bold text-[#B2B2B2]">
              {impactTitle}
            </h6>
            <ul className="mt-2 list-disc pl-8 text-base sm:text-lg sm:leading-[25.2px] text-[#B2B2B2]">
              {impact.map((item, index) => (
                <li key={index}>
                  <TextEdtor description={item}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}