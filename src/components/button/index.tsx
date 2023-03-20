import type { ReactNode } from 'react';

const STYLES = { 
  primary: 'bg-violet-600 text-white hover:bg-violet-500  ',
  secondary: 'bg-violet-600 text-white hover:bg-white hover:text-violet-600',
  white: 'bg-violet-600 text-white hover:bg-white hover:text-violet-600',
  disable: 'bg-violet-600 text-white hover:bg-white hover:text-violet-600',
};

const SIZES = {
  md : 'px-6 py-2',
  lg: 'px-10 py-4'
}

type TProps = {
  className?: string;
  children?: ReactNode;
  style?: keyof typeof STYLES;
  size?: keyof typeof SIZES;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" ;
  disabled?: boolean
};

const Button = (props: TProps) => {
  const {
    children,
    style = 'primary',
    onClick,
    className = '',
    size = 'md',
    type = 'button',
    disabled = false,
  } = props;

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
};

export default Button;
