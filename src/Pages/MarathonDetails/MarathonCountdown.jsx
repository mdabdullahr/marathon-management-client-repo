import React, { useEffect, useState } from "react";

const SIZE = 90; // circle size
const STROKE = 6; // border thickness
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const colors = {
  days: "#4f46e5",    // Indigo
  hours: "#16a34a",   // Green
  minutes: "#f59e0b", // Amber
  seconds: "#ef4444", // Red
};

const MarathonCountdown = ({ startDate }) => {
  const calculateRemainingTime = () => {
    const total = Math.max(0, Math.floor((startDate.getTime() - Date.now()) / 1000));
    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    return { total, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateRemainingTime());

  useEffect(() => {
    if (timeLeft.total <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft.total]);

  if (timeLeft.total <= 0) {
    return (
      <p className="text-lg font-semibold text-red-600 dark:text-red-400">
        Marathon started!
      </p>
    );
  }

  const maxValues = { days: 30, hours: 24, minutes: 60, seconds: 60 };

  const getProgress = (value, max) => {
    return ((max - value) / max) * 100;
  };

  return (
    <div className="flex gap-6 flex-wrap my-6">
      <TimeCircle
        label="Days"
        value={timeLeft.days}
        color={colors.days}
        progress={getProgress(timeLeft.days, maxValues.days)}
      />
      <TimeCircle
        label="Hours"
        value={timeLeft.hours}
        color={colors.hours}
        progress={getProgress(timeLeft.hours, maxValues.hours)}
      />
      <TimeCircle
        label="Minutes"
        value={timeLeft.minutes}
        color={colors.minutes}
        progress={getProgress(timeLeft.minutes, maxValues.minutes)}
      />
      <TimeCircle
        label="Seconds"
        value={timeLeft.seconds}
        color={colors.seconds}
        progress={getProgress(timeLeft.seconds, maxValues.seconds)}
      />
    </div>
  );
};

const TimeCircle = ({ label, value, color, progress }) => {
  // progress: 0 to 100 (%)
  // strokeDashoffset হিসাব করবো circumference এর ভিত্তিতে
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress / 100);

  return (
    <div style={{ width: SIZE, height: SIZE, position: "relative" }}>
      <svg width={SIZE} 
      height={SIZE}
       style={{ transform: "rotate(-90deg)" }}>
        <circle
          stroke="#e5e7eb" // light gray background circle
          fill="transparent"
          strokeWidth={STROKE}
          r={RADIUS}
          cx={SIZE / 2}
          cy={SIZE / 2}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={STROKE}
          r={RADIUS}
          cx={SIZE / 2}
          cy={SIZE / 2}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          fontSize: "1.8rem",
          color: color,
          userSelect: "none",
        }}
      >
        {value}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "0.75rem",
          textTransform: "uppercase",
          color: color,
          userSelect: "none",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default MarathonCountdown;
