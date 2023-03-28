import Image from "next/image";
import chevronDown from "icon/chevron-down.svg";
import calendar from "icon/calendar.svg";
import clock from "icon/clock.svg";
import location from "icon/location.svg";
import close from "icon/close.svg";
import people from "icon/people.svg";
import cost from "icon/cost.svg";
import tagClose from "icon/tag-close.svg";
import menu from "icon/menu.svg";
import facebook from "icon/facebook.svg";
import google from "icon/google.svg";
import barChartUpWithBorder from "icon/bar-chart-up-with-border.svg";
import alarmBell from "icon/alarm-bell.svg";
import user from "icon/user.svg";
import dashboard from "icon/dashboard.svg";
import arrowUp from "icon/arrow-up.svg";
import arrowDown from "icon/arrow-down.svg";
import share from "icon/share.svg";
import arrowRightNoCirle from "icon/arrow-right-no-cirle.svg";
import arrowLeftNoCirle from "icon/arrow-left-no-cirle.svg";
import puzzle from "icon/puzzle.svg";

type Props = {
  color?: keyof typeof IconColor; // default: black
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
  cost: cost,
  menu:menu,
  facebook:facebook,
  google: google,
  'bar-chart-up-with-border': barChartUpWithBorder,
  'alarm-bell' : alarmBell,
  user: user,
  dashboard: dashboard,
  'arrow-up': arrowUp,
  'arrow-down': arrowDown,
  'share': share,
  'arrow-right-no-cirle': arrowRightNoCirle,
  'arrow-left-no-cirle': arrowLeftNoCirle,
  'puzzle': puzzle
};

const IconSize = {
  xxs: 12,
  xs: 16,
  sm: 24, // default size
  md: 32,
  lg: 40,
};

const IconColor = {
  'violet': 'filter invert hue-rotate-270 ',
  'white': 'invert',
  'black': ''
}

const Icon = (props: Props) => {
  const { name, size = "sm", className, onClick , color = 'black'} = props;
  function convertColor(startColor: string, targetColor: string) {
    // Convert hex colors to RGB
    const r1 = parseInt(startColor.slice(1, 2));
    const g1 = parseInt(startColor.slice(3, 2));
    const b1 = parseInt(startColor.slice(5, 2));
  
    const r2 = parseInt(targetColor.slice(1, 2));
    const g2 = parseInt(targetColor.slice(3, 2));
    const b2 = parseInt(targetColor.slice(5, 2));
    
    console.log(r1,g1,b1,r2,g2,b2);
    
    // Calculate the hue angle of the target color
    const hue = Math.atan2(Math.sqrt(3) * (g2 - b2), 2 * r2 - g2 - b2);
    const hueDeg = hue * (180 / Math.PI) + (hue < 0 ? 360 : 0);
  
    // Calculate the hue rotation to convert the start color to the target color
    const deltaHue = hueDeg - Math.atan2(Math.sqrt(3) * (g1 - b1), 2 * r1 - g1 - b1) * (180 / Math.PI);
    
    console.log("deltaHue", deltaHue);
    
    // Build the Tailwind CSS string
    const twColor = ` filter invert hue-rotate-${deltaHue.toFixed(0)}`;
  
    return twColor;
  }
  return (
      <Image
        onClick={onClick}
        src={icons[name]}
        className={`cursor-pointer ${className} `}
        alt={`Icon ${name}`}
        width={IconSize[size]}
        height={IconSize[size]}
      />
  );
};

export type { IconName };

export default Icon;
