import React, { ReactNode } from "react";
import { useField } from "formik";
import Input from "@/components/input";
import Error from "../error";

// React treats radios and checkbox inputs differently other input types, select, and textarea.
// Formik does this too! When you specify `type` to useField(), it will
// return the correct bag of props for you -- a `checked` prop will be included
// in `field` alongside `name`, `value`, `onChange`, and `onBlur`

interface IProps {
  label: string;
  className?: string;
  inputClassName?: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  children?: Array<ReactNode>;
}

const SelectForm = ({
  label,
  className,
  inputClassName,
  ...props
}: IProps) => {
  // eslint-disable-line
  const [field, meta] = useField(props); // eslint-disable-line no-use-before-define

  return (
    <div className={`${className}`}>
      <Input className={inputClassName} label={label} {...field} {...props} />
      <select {...field} {...props} />
      {(meta.touched && meta.error) ? <Error>{meta.error}</Error> : null}
    </div>
  );
};


export default SelectForm;
