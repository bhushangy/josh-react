import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastMessage, setToastMesasge] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { toastArray, addToast } = React.useContext(ToastContext);

  const toastMessageChangeHandler = (e) => {
    setToastMesasge(e.target.value);
  };

  const toastVariantChangeHandler = (e) => {
    setToastVariant(e.target.value);
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (!e.target["toast-message-textarea"].value.toString().trim()) return;

    addToast(toastMessage, toastVariant);

    setToastMesasge("");
    setToastVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastArray.length > 0 && <ToastShelf />}

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
                name="toast-message-textarea"
                id="message"
                className={styles.messageInput}
                value={toastMessage}
                onChange={toastMessageChangeHandler}
                required
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
