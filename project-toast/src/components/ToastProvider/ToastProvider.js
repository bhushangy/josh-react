import React from "react";

import { getToastIcon } from "../ToastPlayground/helpers";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastArray, setToastArray] = React.useState([]);

  const removeToast = React.useCallback(
    (toastKey) => {
      const filteredToastArray = toastArray.filter(
        (toast) => toast.key !== toastKey
      );

      setToastArray(filteredToastArray);
    },
    [toastArray]
  );

  const addToast = React.useCallback((toastMessage, toastVariant) => {
    setToastArray((prevValue) => [
      ...prevValue,
      {
        icon: getToastIcon(toastVariant),
        variant: toastVariant,
        message: toastMessage,
        key: crypto.randomUUID(),
      },
    ]);
  }, []);

  const removeAllToasts = () => setToastArray([]);

  useEscapeKey(removeAllToasts);

  const value = React.useMemo(
    () => ({ toastArray, addToast, removeToast, removeAllToasts }),
    [toastArray, addToast, removeToast]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
