import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastArray, removeToast } = React.useContext(ToastContext);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toastArray.map(({ key, variant, message }) => (
        <li className={styles.toastWrapper} key={key}>
          <Toast
            toastKey={key}
            variant={variant}
            closeButtonClickHandler={removeToast}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
