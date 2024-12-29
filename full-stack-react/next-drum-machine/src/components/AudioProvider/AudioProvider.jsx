"use client";
import React, { useCallback } from "react";

export const AudioContext = React.createContext(null);

function AudioProvider({ children }) {
  const [isAudioEnabled, setIsAudioEnabled] = React.useState(true);

  const toggleAudio = useCallback(() => {
    setIsAudioEnabled((prev) => !prev);
  }, []);

  const value = React.useMemo(
    () => [isAudioEnabled, toggleAudio],
    [isAudioEnabled, toggleAudio]
  );

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

export default AudioProvider;
