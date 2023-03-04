import { Field, useField } from "formik";
import Error from "../error";
interface IProps {
  name: string;
  value?: string;
  options: Array<{
    label: string;
    value: string;
  }>;
}

const Radio = ({ options, ...props }: IProps) => {
  const [field, meta] = useField({ ...props, type: "radio" });

  return (
    <div>
      <label  className="text-[#344054] font-semibold mb-2" id="radio-group">{props.name}</label>
      <div role="group" aria-labelledby="radio-group">
        {options.map((option) => (
          <label className="mr-4" key={option.value}>
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
