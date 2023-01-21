import Location from "@components/icon/Location";
import Input, { CustomErrorMessage } from "@components/ui/Input";
import { Field } from "formik";
import { FC } from "react";
import { TFieldProps } from "./types";

// const getLocation = async () => {
//   const response = await axios.get(
//     "https://maps.googleapis.com/maps/api/js/GeocodeService.Search?"
//   );
// };

const AddressInfo: FC = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-2 gap-4">
        <div>
          <div className="font-bold text-xl mt-3 mb-6 text-primary">Pickup</div>
          <div className="mb-4">
            <Field name="senderName">
              {({ field, meta }: TFieldProps) => (
                <>
                  <Input {...field} label="Sender Name" type="text" />
                  <CustomErrorMessage {...meta} />
                </>
              )}
            </Field>
          </div>
          <div className="mb-4">
            <Field name="senderAddress">
              {({ field, meta }: TFieldProps) => (
                <>
                  <div className="relative">
                    <Input
                      {...field}
                      label="Sender Address"
                      type="text"
                      placeholder="Enter Pickup Location"
                    />
                    <div className="absolute right-1 bottom-1">
                      <button className="hover:bg-grey relative has-loc align-center justify-center rounded-full w-10 h-10">
                        <Location />
                        <p className={`loc`}>Find my location</p>
                      </button>
                    </div>
                  </div>
                  <CustomErrorMessage {...meta} />
                </>
              )}
            </Field>
          </div>
          <div className="mb-4">
            <Field name="senderMail">
              {({ field, meta }: TFieldProps) => (
                <>
                  <Input {...field} label="Sender Email" type="email" />
                  <CustomErrorMessage {...meta} />
                </>
              )}
            </Field>
          </div>
          <div className="mb-4">
            <Field name="senderPhone">
              {({ field, meta }: TFieldProps) => (
                <>
                  <Input {...field} label="Sender Phone" type="tel" />
                  <CustomErrorMessage {...meta} />
                </>
              )}
            </Field>
          </div>
        </div>

        <div>
          <div className="font-bold text-xl mt-12 md:mt-3 mb-6 text-primary">
            Drop-off
          </div>
          <div className="mb-4">
            <Field name="receiverName">
              {({ field, meta }: TFieldProps) => (
                <>
                  <Input {...field} label="Receiver Name" type="text" />
                  <CustomErrorMessage {...meta} />
                </>
              )}
            </Field>
          </div>
          <div className="mb-4 ">
            <Field name="receiverAddress">
              {({ field, meta }: TFieldProps) => (
                <>
                  <div className="relative">
                    <Input
                      {...field}
                      label="Receiver Address"
                      type="address"
                      placeholder="Enter Destination Location"
                    />
                    <div className="absolute right-1 bottom-1">
                      <button className="hover:bg-grey relative has-loc rounded-full w-10 h-10">
                        <Location />
                        <p className={`loc`}>Find my location</p>
                      </button>
                    </div>
                  </div>
                  <CustomErrorMessage {...meta} />
                </>
              )}
            </Field>
          </div>
          <div className="mb-4">
            <Field name="receiverMail">
              {({ field, meta }: TFieldProps) => (
                <>
                  <Input {...field} label="Receiver Email" type="email" />
                  <CustomErrorMessage {...meta} />
                </>
              )}
            </Field>
          </div>
          <div className="mb-4">
            <Field name="receiverPhone">
              {({ field, meta }: TFieldProps) => (
                <>
                  <Input {...field} label="Receiver Phone" type="tel" />
                  <CustomErrorMessage {...meta} />
                </>
              )}
            </Field>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressInfo;
