"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";
import { AudioContext } from "../AudioProvider/AudioProvider";

function Header() {
  const [isAudioEnabled, toggleAudio] = React.useContext(AudioContext);

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button onClick={toggleAudio}>
          {isAudioEnabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {isAudioEnabled ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
