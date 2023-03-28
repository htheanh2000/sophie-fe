"use client";
import { HTMLInputTypeAttribute } from "react";
import Icon, { IconName } from "../icon";

type Props = {
  placeholder?: string;
  label?: string;
  className?: string;
  name?: string;
  onChange?: any;
  type?: HTMLInputTypeAttribute;
  value?: string;
  defaultInput?: boolean;
  id?: string;
  icon?: IconName;
};

const Input = (props: Props) => {
  const { label, id, icon , placeholder } = props;

  return (
    <div className={placeholder}>
      {label && (
        <div className="pb-3 ml-1 capitalize font-semibold">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="flex items-center">
        {icon && <Icon size="lg" name={icon} />}
        <input
          {...props}
          className={`w-full px-4 py-2 cursor-pointer outline rounded-sm outline-1 outline-gray/20 focus:outline-primary`}
        />
      </div>
    </div>
  );
};

export default Input;
