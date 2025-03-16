"use client";
import React from "react";
import clsx from "clsx";
import { Play, Pause, RotateCcw } from "react-feather";

import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./CircularColorsDemo.module.css";

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [timerState, setTimerState] = React.useState("paused");

  React.useEffect(() => {
    if (timerState === "paused") return;

    const intervalId = setInterval(() => {
      setTimeElapsed((prevValue) => prevValue + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerState]);

  const selectedColor = COLORS[timeElapsed % COLORS.length];

  function handlePlayPauseClick() {
    timerState === "paused"
      ? setTimerState("running")
      : setTimerState("paused");
    setTimeElapsed((prev) => prev + 1);
  }

  function handleResetClick() {
    setTimeElapsed(0);
    setTimerState("paused");
  }

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li className={styles.color} key={index}>
              {isSelected && <div className={styles.selectedColorOutline} />}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button onClick={handlePlayPauseClick}>
            {timerState === "paused" && <Play />}
            {timerState === "running" && <Pause />}
            <VisuallyHidden>Play</VisuallyHidden>
          </button>
          <button onClick={handleResetClick}>
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
