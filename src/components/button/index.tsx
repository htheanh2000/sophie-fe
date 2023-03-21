import Link from "next/link";
import type { ReactNode } from "react";

const STYLES = {
  primary: "bg-violet-600 text-white hover:bg-violet-500  ",
  secondary:
    "text-violet-600 border border-violet-600 hover:bg-violet-600 hover:text-white",
  white: "bg-violet-600 text-white hover:bg-white hover:text-violet-600",
  disable: "bg-gray/20 text-black/50",
};

const SIZES = {
  md: "px-6 py-2",
  lg: "px-10 py-4",
};

interface IProps {
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  style?: keyof typeof STYLES;
  size?: keyof typeof SIZES;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

const Button = (props: IProps) => {
  const {
    children,
    style = "primary",
    onClick,
    className = "",
    size = "md",
    type = "button",
    disabled = false,
    href = "",
    loading= false,
  } = props;

  if (loading) {
    return (
      <button
        type={type}
        disabled
        className={`flex cursor-pointer w-fit items-center justify-center ${STYLES[style]}  rounded ${SIZES[size]} font-semibold ${className}`}
      >
        <svg
          className="animate-spin h-5 w-5 mr-3 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        {children}
      </button>
    );
  }
  if (href) {
    return (
      <Link href={href}>
        <button
          type={type}
          disabled={disabled}
          className={`flex cursor-pointer w-fit items-center justify-center ${STYLES[style]}  rounded ${SIZES[size]} font-semibold ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`flex cursor-pointer w-fit items-center justify-center ${STYLES[style]}  rounded ${SIZES[size]} font-semibold ${className}`}
      >
        {children}
      </button>
    );
  }
};

export default Button;
