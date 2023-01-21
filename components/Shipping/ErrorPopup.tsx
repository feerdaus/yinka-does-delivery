import CloseIcon from "@components/icon/Close";
import { FC } from "react";

interface IErrorPopup {
  title: string;
  message: string;
  toggleErrorPopup: (open: boolean) => () => void;
}

const ErrorPopup: FC<IErrorPopup> = ({ title, message, toggleErrorPopup }) => {
  return (
    <>
      <div
        className="fixed max-w-full top-0 left-0 h-screen z-20 w-screen bg-black opacity-40"
        onClick={toggleErrorPopup(false)}
      />
      <div className="fixed left-1/2 top-5 error-popup z-50">
        <div className="bg-light-red px-5 py-4 max-w-384 rounded-lg">
          <div className="align-center justify-between mb-6 ">
            <p className="font-medium text-lg text-red">{title}</p>
            <button
              className="cursor-pointer"
              onClick={toggleErrorPopup(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <p className="text-primary pr-2">{message}</p>
          <div className="mt-3 flex justify-end font-semibold">
            <p className="cursor-pointer" onClick={toggleErrorPopup(false)}>
              Yes
            </p>
            <p
              className="ml-4 cursor-pointer"
              onClick={toggleErrorPopup(false)}
            >
              No
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPopup;
