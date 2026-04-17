// components/FeatureCard.tsx
import { Check } from "lucide-react"

type Props = {
  text: string
}

export default function FeatureCard({ text }: Props) {
  return (
    <div
      className="flex items-center gap-3 lg:gap-4 py-2 lg:py-3 sm:py-7 px-4 lg:px-6 rounded-xl
      bg-black/30 mix-blend-normal backdrop-blur-2xl 
     transition duration-300 h-full" style={{
    boxShadow:
      "rgba(255, 255, 255, 0.14) 0px -50px 44px inset, rgba(255, 255, 255, 0.4) 0px 0px 5px inset, rgba(255, 255, 255, 0.69) 0px 0px 0px inset",
  }}
    >
      {/* Icon */}
      <div className="bg-[#05E388] p-2 rounded-full">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
           <Check className="text-green-400 w-4 h-4" /> 
        </span>
      </div>

      {/* Text */}
      <p className="text-white text-start text-base lg:text-[22px] font-semibold lg:leading-[30.8px]">
        {text}
      </p>
    </div>
  )
}






