import { SetFieldValue } from "@components/Shipping/types";
import { FC } from "react";

interface ISwitch {
  value: string;
  setFieldValue: SetFieldValue;
}

const Switch: FC<ISwitch> = ({ value, setFieldValue }) => {
  return (
    <div className="p-1 flex">
      <label className="switch">
        <input
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setFieldValue("isFragile", "Yes");
            } else {
              setFieldValue("isFragile", "No");
            }
          }}
        />
        <span className="slider round"></span>
      </label>
      <p className="ml-3">{value}</p>
    </div>
  );
};

export default Switch;
