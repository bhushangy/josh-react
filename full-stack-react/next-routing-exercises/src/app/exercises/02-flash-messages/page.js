import React from "react";
import Link from "next/link";
import ToastShelf from "../../../components/ToastShelf/ToastShelf";

function FlashMsgExercise() {
  console.log("Server component log");
  return (
    <main>
      <h1>Welcome to my website!</h1>
      <p>
        Got feedback? Please{" "}
        <Link href="/exercises/02-flash-messages/contact">contact us</Link>.
      </p>
      <ToastShelf />
    </main>
  );
}

export default FlashMsgExercise;
