import { FieldProps, FormikErrors } from "formik";
import { FocusEvent } from "react";

export enum ShippingFlow {
  PARCEL_INFO,
  ADDRESS_INFO,
  PAYMENT,
}

export interface Values {
  itemName: string;
  additionalInfo: string;
  senderName: string;
  senderAddress: string;
  senderMail: string;
  senderPhone: string;
  receiverName: string;
  receiverAddress: string;
  receiverMail: string;
  receiverPhone: string;
  isFragile: "Yes" | "No";
}

export interface HandleChange {
  (e: React.ChangeEvent<any>): void;
  <T_1 = string | React.ChangeEvent<any>>(
    field: T_1
  ): T_1 extends React.ChangeEvent<any>
    ? void
    : (e: string | React.ChangeEvent<any>) => void;
}

export type SetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean | undefined
) => void;

export type SetFieldTouched = (
  field: string,
  touched?: boolean | undefined,
  shouldValidate?: boolean | undefined
) => Promise<void> | Promise<FormikErrors<Values>>;

export interface OnBlur {
  (e: FocusEvent<any, Element>): void;
  <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
}

export type TFieldProps = FieldProps<Values>;
