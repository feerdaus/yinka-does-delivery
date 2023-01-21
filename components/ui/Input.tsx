import WarningIcon from "@components/icon/Warning";
import { HandleChange, OnBlur, Values } from "@components/Shipping/types";
import { FC } from "react";

interface IInput {
  label?: string;
  value: Values;
  onChange: HandleChange;
  name: string;
  placeholder?: string;
  type?: string;
  onBlur: OnBlur;
}

const Input: FC<IInput> = ({
  name,
  label,
  placeholder,
  value,
  type = "text",
  onChange,
  onBlur,
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
          value={value as any}
          className={`form-control`}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default Input;

interface ICustomErrorMessage {
  error?: string;
  touched?: boolean;
}

export const CustomErrorMessage: FC<ICustomErrorMessage> = ({
  error,
  touched,
}) => (
  <>
    {error && touched && (
      <small className="text-error align-center text-xs">
        <span className="mr-2">
          <WarningIcon />
        </span>
        {error}
      </small>
    )}
  </>
);
