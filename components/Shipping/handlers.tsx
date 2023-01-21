import AddressInfo from "./AddressInfo";
import ParcelInfo from "./ParcelInfo";
import Payment from "./Payment";
import { ShippingFlow, Values } from "./types";

export const getStep = (step: ShippingFlow, values: Values) => {
  switch (step) {
    case ShippingFlow.PARCEL_INFO:
      return <ParcelInfo />;
    case ShippingFlow.ADDRESS_INFO:
      return <AddressInfo />;
    case ShippingFlow.PAYMENT:
      return <Payment values={values} />;
  }
};

export const handleNavigation =
  (
    step: number,
    formik: any,
    setStep: any,
    setErrorDetails: any,
    setIsParcelInfoFilled: any,
    setIsAddressInfoFilled: any
  ) =>
  () => {
    if (step === ShippingFlow.PARCEL_INFO) {
      if (formik.values.itemName && !formik.errors.itemName) {
        setStep(step + 1);
        setIsParcelInfoFilled(true);
      } else {
        setErrorDetails({
          title: "Incomplete Details.",
          message: "Kindly make sure you fill all the required(*) fields.",
          open: true,
        });
      }
    } else if (step === ShippingFlow.ADDRESS_INFO) {
      if (
        !formik.errors.senderName &&
        formik.values.senderName &&
        !formik.errors.senderAddress &&
        formik.values.senderAddress &&
        !formik.errors.senderMail &&
        formik.values.senderMail &&
        !formik.errors.senderPhone &&
        formik.values.senderPhone &&
        !formik.errors.receiverPhone &&
        formik.values.receiverPhone &&
        !formik.errors.receiverName &&
        formik.values.receiverName &&
        !formik.errors.receiverMail &&
        formik.values.receiverMail &&
        !formik.errors.receiverAddress &&
        formik.values.receiverAddress
      ) {
        setStep(step + 1);
        setIsAddressInfoFilled(true);
      } else {
        setErrorDetails({
          title: "Incomplete Details.",
          message: "Kindly make sure you fill ALL fields.",
          open: true,
        });
      }
    }
  };
