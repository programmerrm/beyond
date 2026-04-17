type TechCardProps = {
  title: string;
  items: string[];
};

export default function TechCard({ title, items }: TechCardProps) {
  return (
    <div
      className="rounded-[10px] px-5 md:px-8 lg:px-11 pt-5 md:pt-8 pb-6 md:pb-12 backdrop-blur-[20px] h-full"
      style={{
        boxShadow: `inset 3px 3px 0px -3px rgba(0, 0, 0, 0.5), inset -2px -2px 1px -2px #B3B3B3, inset 2px 2px 1px -2px #B3B3B3, inset 0 0 0 0px #999999, inset 0 0 3px 0 rgba(242, 242, 242, 0.5)`,
      }}
    >
      <h5 className="mb-4">{title}</h5>

      <ul className="list-disc pl-8 text-base sm:text-lg sm:leading-[25.2px] text-[#B2B2B2]">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}