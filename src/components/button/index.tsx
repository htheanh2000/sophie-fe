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
  } = props;

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
    )
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
    )
  }
};

export default Button;
