import { FC } from "react";
import { Values } from "./types";

interface IPayment {
  values: Values;
}

const Payment: FC<IPayment> = ({ values }) => {
  return (
    <div className="bg-white">
      <p className="my-6">
        Kindly confirm the details of your Shipping before proceeding to
        payment.
      </p>
      <div className="px-5 bg-grey-light rounded-md">
        <div className="border-b  border-grey">
          <div className=" py-5 border-b  border-grey align-center">
            <p className="text-2xl font-medium mr-2">{values.itemName}</p>
            {values.isFragile === "Yes" ? (
              <span className="rounded-full py-1 px-2 font-medium text-red bg-red-100">
                Fragile
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="mt-5">
            <span className="p-2 bg-grey text-sm">Shipping From</span>

            <div className="py-5">
              {values.senderAddress ? (
                <p className="font-medium">{values.senderAddress}</p>
              ) : (
                <p className="font-medium">No Address Provided</p>
              )}
              <p>{values.senderName}</p>
              {values.senderMail ? (
                <p>{values.senderMail}</p>
              ) : (
                <p>No email provided</p>
              )}
              {values.senderPhone ? (
                <p>{values.senderPhone}</p>
              ) : (
                <p>No phone number provided</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <span className="p-2 bg-grey mb-2 text-sm">Shipping To</span>
          <div className="py-5">
            {values.receiverAddress ? (
              <p className="font-medium">{values.receiverAddress}</p>
            ) : (
              <p className="font-medium">No Address Provided</p>
            )}
            <p>{values.senderName}</p>
            {values.receiverMail ? (
              <p>{values.receiverMail}</p>
            ) : (
              <p>No email provided</p>
            )}
            {values.receiverPhone ? (
              <p>{values.receiverPhone}</p>
            ) : (
              <p>No phone number provided</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
