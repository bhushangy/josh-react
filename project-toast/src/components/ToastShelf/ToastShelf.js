import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastArray, removeAllToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    const escKeyPressHandler = (e) => {
      if (!(e.key === "Escape")) return;

      removeAllToasts();
    };

    document.addEventListener("keydown", escKeyPressHandler);

    return () => document.removeEventListener("keydown", escKeyPressHandler);
  }, []);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toastArray.map(({ key, icon, variant, message }) => (
        <li className={styles.toastWrapper} key={key}>
          <Toast toastKey={key} icon={icon} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
