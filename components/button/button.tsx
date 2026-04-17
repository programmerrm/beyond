import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function Button({
  text,
  icon,
  href,
  onClick,
}: ButtonProps) {
  const content = (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-3 rounded-full bg-white px-4 sm:px-6 py-2 text-sm lg:text-lg lg:leading-5 font-semibold text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90.45deg,#00D1FF_-368.58%,#FF09F4_40.43%,#2D7FFF_174.52%)] transition-all duration-300 group jami-link jami-link--arrowed"
    >
      {text}

        <svg
          className="arrow-icon size-6 sm:size-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <g
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          >
            <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12" />
            <path
              className="arrow-icon--arrow"
              d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
            />
          </g>
        </svg>
    </button>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}