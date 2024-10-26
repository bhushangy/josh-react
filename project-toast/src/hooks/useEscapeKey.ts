import React from "react";

const useEscapeKey = (callBackFn) => {
  if (typeof callBackFn !== "function")
    throw Error("callBackFn must be a function");

  React.useEffect(() => {
    const escKeyPressHandler = (e) => {
      if (!(e.key === "Escape")) return;

      callBackFn();
    };

    document.addEventListener("keydown", escKeyPressHandler);

    return () => document.removeEventListener("keydown", escKeyPressHandler);
  }, []);
};

export default useEscapeKey;
