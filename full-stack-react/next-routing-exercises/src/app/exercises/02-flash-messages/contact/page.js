"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ToastContext } from "../../../../components/ToastProvider";

function ContactPage() {
  const router = useRouter();
  const { createToast, dismissAllToasts, toasts } =
    React.useContext(ToastContext);

  console.log("Yo", toasts, createToast);

  function handleFormSubmit(e) {
    e.preventDefault();
    // Clear all previous toasts
    dismissAllToasts();

    createToast(
      `Your message was received, ${e.target[0].value}. We'll get back to you shortly!`,
      "success"
    );
    router.push("/exercises/02-flash-messages");
  }

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
