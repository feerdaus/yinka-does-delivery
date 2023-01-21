import WarningIcon from "@components/icon/Warning";
import { HandleChange, SetFieldTouched } from "@components/Shipping/types";
import { FC } from "react";

interface IInput {
  label?: string;
  value: string | number | readonly string[] | undefined;
  handleChange: HandleChange;
  name: string;
  placeholder?: string;
  type?: string;
  error?: string;
  touched?: boolean;
  setFieldTouched: SetFieldTouched;
}

const Input: FC<IInput> = ({
  name,
  label,
  placeholder,
  handleChange,
  value,
  type = "text",
  error,
  touched,
  setFieldTouched,
}) => {
  return (
    <div>
      <label htmlFor={name} className="mb-1 text-pry-light text-base">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          className={`form-control`}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={() => setFieldTouched(name, true)}
        />
      </div>
      {error && touched && (
        <small className="text-red align-center text-xs">
          <span className="mr-2">
            <WarningIcon />
          </span>
          {error}
        </small>
      )}
    </div>
  );
};

export default Input;
