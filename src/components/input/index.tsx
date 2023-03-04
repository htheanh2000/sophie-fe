import {
  forwardRef,
  HTMLInputTypeAttribute,
  useImperativeHandle,
  useRef,
} from "react";
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

export interface InputRef extends HTMLInputElement {
  getValue: () => string;
}

const Input = forwardRef((props: Props, ref) => {
  const { className, onChange, defaultInput = false, label, id, icon } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    getValue: () => inputRef?.current?.value,
  }));

  return (
    <div>
      <div className="flex items-center">
        {icon && <Icon size="lg" name={icon}  />}
        <input
          onChange={onChange}
          {...props}
          className={
            !defaultInput
              ? `w-full px-4 cursor-pointer pl-1 ml-2 text-gray text-heading-6 rounded outline-0 ${className}`
              : `w-auto cursor-pointer  ${className}`
          }
        />
      </div>
      {label && (
        <label className="mx-2 cursor-pointer" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
