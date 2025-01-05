import React from "react";
import Link from "next/link";


function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      <h1>Choose your color</h1>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/aliceblue">aliceblue</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
