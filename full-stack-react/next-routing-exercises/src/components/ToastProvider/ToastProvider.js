"use client";
import React from "react";

import useKeydown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown("Escape", handleEscape);

  function createToast(message, variant) {
    // const nextToasts = [
    //   ...toasts,
    //   {
    //     id: crypto.randomUUID(),
    //     message,
    //     variant,
    //   },
    // ];

    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  function dismissAllToasts() {
    setToasts([]);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        createToast,
        dismissToast,
        dismissAllToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
