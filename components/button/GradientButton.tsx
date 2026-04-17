import Link from "next/link";
import { ReactNode } from "react";

type GradientButtonProps = {
  text: string;
  icon: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function GradientButton({
  text,
  icon,
  className = "",
  href,
  onClick,
}: GradientButtonProps) {
  const content = (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(115.33deg,#00D1FF_-174.52%,#FF09F4_89.43%,#2D7FFF_368.58%)] px-4 sm:px-6 py-2 text-sm lg:text-lg lg:leading-5 font-semibold text-white cursor-pointer hover:bg-[linear-gradient(90.45deg,#00D1FF_-368.58%,#FF09F4_40.43%,#2D7FFF_174.52%)] transition-all duration-500 group jami-link jami-link--arrowed ${className}`}
    >
      <span>{text}</span>

        <svg
        className="arrow-icon size-7 sm:size-8.25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        >
          {/* Circle */}
          <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12" />

          {/* Centered icon */}
          <g transform="translate(9,8) scale(0.8)">
            <path
              fill="#fff"
              stroke="#fff"
              strokeWidth=".2"
              d="M9 2.15a7.6 7.6 0 0 1 7.6 7.6V15a.85.85 0 0 1-.85.85H13.5a2.35 2.35 0 0 1-2.35-2.35V12a2.35 2.35 0 0 1 2.35-2.35h1.398a5.899 5.899 0 0 0-11.795 0H4.5A2.35 2.35 0 0 1 6.85 12v1.5a2.35 2.35 0 0 1-2.35 2.35H2.25A.85.85 0 0 1 1.4 15V9.75A7.6 7.6 0 0 1 9 2.15Zm4.5 9.2a.65.65 0 0 0-.65.65v1.5a.65.65 0 0 0 .65.65h1.4v-2.8zm-10.4 2.8h1.4a.65.65 0 0 0 .65-.65V12a.65.65 0 0 0-.65-.65H3.1z"
            />
          </g>
        </g>
      </svg>
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}