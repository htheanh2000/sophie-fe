import { Field, useField } from "formik";
import React, { useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Icon, { IconName } from "../icon";
import Error from "../form/error";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface Props {
  className?: string;
  icon?: IconName;
  datePickerClassName?: string;
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
}
const CustomDatePicker = (props: Props) => {
  const { className, icon, datePickerClassName, name, ...rest } = props;

  const [field, meta] = useField(props);
  return (
    <div className={className}>
      <div className="flex items-center">
        {icon && <Icon size="lg" name={icon} />}
        <input
          className={`cursor-pointer pl-1 text-heading-6 text-gray outline rounded  outline-1 outline-white 
          ${datePickerClassName}`}
          type={name}
          {...field}
          {...rest}
        ></input>
      </div>
      {meta.error ? <Error>{meta.error}</Error> : null}
    </div>
  );
};

export default CustomDatePicker;
