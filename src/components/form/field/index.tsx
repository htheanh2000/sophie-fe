import React, { ReactNode } from "react";
import { useField } from "formik";
import Input from "@/components/input";
import Error from "../error";
import { IconName } from "@/components/icon";
// Define interface for props
//TO DO: extends Partial<HTMLInputElement> make error but can not resolve
interface IProps {
  defaultValue?: string;
  label?: string;
  name: string;
  id?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultInput?: boolean;
  inputClassName?: string;
  min?: number;
  max?: number;
  icon?: IconName
}

const Field = ({
  label,
  className,
  inputClassName,
  icon,
  ...props
}: IProps) => {
  const [field, meta] = useField(props); 

  return (
    <div className={`${className}`}>
      <Input icon={icon} className={inputClassName} label={label} {...field} {...props} />
      {(meta.touched && meta.error) ? <Error>{meta.error}</Error> : null}
    </div>
  );
};


export default Field;
