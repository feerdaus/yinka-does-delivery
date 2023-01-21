import AddressIcon from "@components/icon/Address";
import ArrowLeft from "@components/icon/ArrowLeft";
import Parcel from "@components/icon/Parcel";
import PaymentIcon from "@components/icon/Payment";
import { validationSchema } from "@components/utils/shipping.schema";
import { Form, Formik } from "formik";
import { FC, useEffect, useState } from "react";
import ErrorPopup from "./ErrorPopup";
import { getStep, handleNavigation } from "./handlers";
import { ShippingFlow, Values } from "./types";

const initialValues: Values = {
  itemName: "",
  additionalInfo: "",
  senderName: "",
  senderAddress: "",
  senderMail: "",
  senderPhone: "",
  receiverName: "",
  receiverAddress: "",
  receiverMail: "",
  receiverPhone: "",
  isFragile: "No",
};

const Shipping: FC = () => {
  const [step, setStep] = useState(ShippingFlow.PARCEL_INFO);
  const [isParcelInfoFilled, setIsParcelInfoFilled] = useState(false);
  const [isAddressInfoFilled, setIsAddressInfoFilled] = useState(false);
  const [errorDetails, setErrorDetails] = useState({
    title: "",
    message: "",
    open: false,
  });

  const toggleErrorPopup = (open: boolean) => () => {
    setErrorDetails({ ...errorDetails, open });
  };

  const tabtitles = [
    { icon: <Parcel />, title: "Parcel Information" },
    {
      icon: <AddressIcon />,
      title: "Address Information",
      disabled: !isParcelInfoFilled,
    },
    {
      icon: <PaymentIcon />,
      title: "Payment",
      disabled: !isAddressInfoFilled || !isParcelInfoFilled,
    },
  ];

  useEffect(() => {
    if (errorDetails.open) {
      const timeout = setTimeout(
        () => setErrorDetails({ ...errorDetails, open: false }),
        2000
      );

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [errorDetails.open]);

  return (
    <div className="px-5 py-6 md:p-8">
      <div className="max-w-screen-md mx-auto my-10 py-12 px-5 md:px-10 bg-white rounded-3xl">
        <div className="mb-8">
          <div className="rounded-full w-10 h-10 mb-5 bg-grey align-center justify-center">
            <ArrowLeft />
          </div>
          <h1 className="text-2xl md:text-3xl text-primary font-bold">
            Ship Parcel
          </h1>
          <p className="text-pry-light">
            Help us with the details of your parcel.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {(formik) => {
            return (
              <Form>
                <ul className="space-x-1 md:space-x-6 border-b border-grey">
                  {tabtitles.map((item, index) => (
                    <button
                      disabled={Boolean(item.disabled)}
                      key={`${item.title}-${index}`}
                      className={`${
                        index === step ? "border-b-2 border-black" : ""
                      } disabled:cursor-not-allowed`}
                      onClick={() => setStep(index)}
                    >
                      <li
                        className={`align-center text-xs py-3 px-2 ${
                          index === step ? "" : "text-grey-100"
                        }`}
                      >
                        {item.icon} <span className="ml-2">{item.title}</span>
                      </li>
                    </button>
                  ))}
                </ul>

                {getStep(step, formik.values)}

                <div className="flex justify-end mt-10">
                  {step !== ShippingFlow.PARCEL_INFO && (
                    <button
                      className="btn-full btn-lg mr-3 btn-red"
                      onClick={() => setStep(step - 1)}
                    >
                      Previous
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn-full btn-lg text-base btn-green bg-green disabled:cursor-not-allowed"
                    disabled={step === ShippingFlow.PAYMENT}
                    onClick={handleNavigation(
                      step,
                      formik,
                      setStep,
                      setErrorDetails,
                      setIsParcelInfoFilled,
                      setIsAddressInfoFilled
                    )}
                  >
                    Next
                  </button>
                </div>
                {errorDetails.open && (
                  <ErrorPopup
                    title={errorDetails.title}
                    message={errorDetails.message}
                    toggleErrorPopup={toggleErrorPopup}
                  />
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Shipping;
