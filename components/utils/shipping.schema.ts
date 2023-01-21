import * as yup from "yup";

const canBeLettersAndSpaces = new RegExp("^([a-zA-Zs]+)$");

export const validationSchema = yup.object({
  itemName: yup
    .string()
    .matches(canBeLettersAndSpaces, {
      message: "Item Name expects only alphabets and spaces.",
    })
    .min(3, "Item Name should be at least 3 characters long.")
    .required("Item Name is required"),

  senderName: yup
    .string()
    .matches(canBeLettersAndSpaces, {
      message: "Sender Name expects only alphabets and spaces.",
    })
    .min(3, "Sender Name should be at least 3 characters long.")
    .required("Sender Name is required"),

  receiverName: yup
    .string()
    .matches(canBeLettersAndSpaces, {
      message: "Receiver Name expects only alphabets and spaces.",
    })
    .min(3, "Receiver Name should be at least 3 characters long.")
    .required("Receiver Name is required"),

  senderMail: yup
    .string()
    .email("Sender mail does not look like a valid email."),

  receiverMail: yup
    .string()
    .email("Receiver mail does not look like a valid email."),

  senderAddress: yup.string().required("Sender Address is required"),

  receiverAddress: yup.string().required("Receiver Address is required"),

  senderPhone: yup
    .string()
    .length(11, "Your entry does not look like a phone number.")
    .required("Sender Phone is required"),

  receiverPhone: yup
    .string()
    .length(11, "Your entry does not look like a phone number.")
    .required("Receiver Phone is required"),
});
