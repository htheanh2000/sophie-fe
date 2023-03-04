import type { ReactNode } from 'react';

const STYLES = {
  primary: {
    bg: 'bg-yellow',
    'text-color': 'text-purple',
  },
  secondary: {
    bg: 'bg-white',
    'text-color': 'text-black',
  },
  white: {
    bg: 'bg-white',
    'text-color': 'text-black',
  },
  disable: {
    bg: 'bg-[#808080]',
    'text-color': 'text-gray',
  },
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
      className={`flex cursor-pointer w-fit items-center justify-center ${STYLES[style].bg} rounded ${SIZES[size]}  font-semibold ${STYLES[style]['text-color']} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
