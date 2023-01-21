import Input, { CustomErrorMessage } from "@components/ui/Input";
import Switch from "@components/ui/Switch";
import { Field } from "formik";
import { FC } from "react";
import { TFieldProps } from "./types";

const ParcelInfo: FC = () => {
  return (
    <>
      <div className="my-8">
        <Field name="itemName">
          {({ field, meta }: TFieldProps) => (
            <>
              <Input
                {...field}
                label="What do you want to ship? * (0/40)"
                type="text"
                placeholder="E.g. Affidavit, Birthday Cake"
              />
              <CustomErrorMessage {...meta} />
            </>
          )}
        </Field>
      </div>

      <Field name="isFragile">
        {({ form: { values, setFieldValue } }: TFieldProps) => {
          return (
            <>
              <p className="text-pry-light mb-6">Is this parcel fragile?</p>
              <Switch value={values.isFragile} setFieldValue={setFieldValue} />
            </>
          );
        }}
      </Field>

      <div className="my-8">
        <Field name="additionalInfo">
          {({ field: { onBlur, ...otherFields } }: TFieldProps) => (
            <>
              <label htmlFor="additionalInfo" className="text-pry-light mb-2">
                Additional Info (optional)
              </label>
              <textarea
                {...(otherFields as any)}
                id="additionalInfo"
                className="p-3 w-full form-control"
              />
            </>
          )}
        </Field>
      </div>
    </>
  );
};

export default ParcelInfo;
