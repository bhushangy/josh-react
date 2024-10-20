import React from "react";

import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

import { getToastIcon } from "../ToastPlayground/helpers";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastMessage, setToastMesasge] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState("notice");
  const [showToast, setShowToast] = React.useState(false);

  const toastIcon = getToastIcon(toastVariant);

  const toastMessageChangeHandler = (e) => {
    setToastMesasge(e.target.value);
  };

  const toastVariantChangeHandler = (e) => {
    setToastVariant(e.target.value);
  };

  const toastCloseButtonClickHandler = React.useCallback(() => {
    setShowToast(false);
  }, [setShowToast]);

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && (
        <Toast
          icon={toastIcon}
          variant={toastVariant}
          closeButtonClickHandler={toastCloseButtonClickHandler}
        >
          {toastMessage}
        </Toast>
      )}

      <form onSubmit={onFormSubmitHandler}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={toastMessage}
                onChange={toastMessageChangeHandler}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
                <label htmlFor={option} key={option}>
                  <input
                    id={option}
                    type="radio"
                    name="toast-variant"
                    value={option}
                    checked={option === toastVariant}
                    onChange={toastVariantChangeHandler}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
