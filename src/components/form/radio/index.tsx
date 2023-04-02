import { Field, useField } from "formik";
import Error from "../error";
interface IProps {
  label?: string;
  clasName?: string;
  name: string;
  value?: string;
  options: Array<{
    label: string;
    value: string;
  }>;
}

const Radio = ({ label, options, ...props }: IProps) => {
  const [field, meta] = useField({ ...props, type: "radio" });

  return (
    <div className={props.clasName}>
      {label && <label  className="text-[#344054] font-semibold mb-2" id="radio-group">{label}</label> }
      <div role="group" aria-labelledby="radio-group">
        {options.map((option, index) => (
          <label className="mr-4 cursor-pointer" key={option.value}>
            <Field className="mr-1" type="radio" name={props.name} value={option.value} />
            {option.label}
          </label>
        ))}
        
      </div>
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </div>
  );
};

export default Radio;
