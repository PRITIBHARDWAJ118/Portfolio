import { useEffect, useState } from "react";
import "./LoadingScreen.css";

const INTRO_DURATION = 2600;
const COMPLETE_DELAY = 620;

function getMessage(progress) {
  if (progress === 100) return "Welcome to StudioP";
  return progress < 38 ? "Hello" : "Welcome";
}

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(7);
  const [isExiting, setIsExiting] = useState(false);
  const message = getMessage(progress);

  useEffect(() => {
    const startedAt = performance.now();
    let timerId;
    let currentProgress = 7;

    const updateProgress = () => {
      const elapsed = performance.now() - startedAt;

      if (elapsed >= INTRO_DURATION) {
        currentProgress = 100;
        setProgress(currentProgress);
        timerId = window.setTimeout(() => setIsExiting(true), COMPLETE_DELAY);
        return;
      }

      const increment = Math.floor(Math.random() * 8) + 4;
      const ceiling = elapsed > INTRO_DURATION * 0.72 ? 98 : 92;
      currentProgress = Math.min(currentProgress + increment, ceiling);
      setProgress(currentProgress);
      timerId = window.setTimeout(updateProgress, 130 + Math.floor(Math.random() * 130));
    };

    timerId = window.setTimeout(updateProgress, 180);
    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!isExiting) return undefined;

    const timerId = window.setTimeout(onComplete, 420);
    return () => window.clearTimeout(timerId);
  }, [isExiting, onComplete]);

  return (
    <div
      className={`loading-screen ${isExiting ? "loading-screen--exiting" : ""}`}
      aria-live="polite"
      aria-label={`Loading StudioP, ${progress}% complete`}
    >
      <div className="loading-screen__ambient" aria-hidden="true" />
      <div className="loading-screen__content">
        <div
          className="loading-screen__loader"
          style={{ "--progress": `${progress * 3.6}deg` }}
          aria-hidden="true"
        >
          <div className="loading-screen__loader-core">
            <span className="loading-screen__percentage">{progress}%</span>
          </div>
        </div>
        <p key={message} className="loading-screen__message">
          {message}
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
