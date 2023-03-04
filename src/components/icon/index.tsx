import Image from "next/image";
import chevronDown from "icon/chevron-down.svg";
import calendar from "icon/calendar.svg";
import clock from "icon/clock.svg";
import location from "icon/location.svg";
import close from "icon/close.svg";
import people from "icon/people.svg";
import cost from "icon/cost.svg";
import tagClose from "icon/tag-close.svg";

type Props = {
  color?: string; // default: black
  name: IconName;
  className?: string;
  size?: keyof typeof IconSize;
  onClick?: () => void;
};

type IconName = keyof typeof icons;

export const icons = {
  "chevron-down": chevronDown,
  calendar: calendar,
  clock: clock,
  location: location,
  close: close,
  'tag-close': tagClose,
  people: people,
  cost: cost
};

const IconSize = {
  xxs: 12,
  xs: 16,
  sm: 24, // default size
  md: 32,
  lg: 40,
};

const Icon = (props: Props) => {
  const { name, size = "sm", className, onClick } = props;

  return (
    <div>
      <Image
        onClick={onClick}
        src={icons[name]}
        className={`cursor-pointer ${className}`}
        alt={`Icon ${name}`}
        width={IconSize[size]}
        height={IconSize[size]}
      />
    </div>
  );
};

export type { IconName };

export default Icon;
