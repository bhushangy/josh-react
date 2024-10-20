import React from "react";

import { Info } from "react-feather";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, toastCloseButtonClickHandler }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ key, icon, variant, message }) => (
        <li className={styles.toastWrapper} key={key}>
          <Toast
            toastKey={key}
            icon={icon}
            variant={variant}
            closeButtonClickHandler={toastCloseButtonClickHandler}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
