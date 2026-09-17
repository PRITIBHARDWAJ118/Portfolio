import { useEffect, useState } from "react";
import "./LoadingScreen.css";

const HELLO_DURATION = 700;
const FADE_DURATION = 320;
const LOADING_DURATION = 1400;
const COMPLETE_DURATION = 360;
const WELCOME_DURATION = 750;

function LoadingScreen({ onComplete }) {
  const [stage, setStage] = useState("hello");
  const [progress, setProgress] = useState(0);
  const isLoading = stage.startsWith("loading");

  useEffect(() => {
    let timeoutId;
    let intervalId;

    if (stage === "hello") {
      timeoutId = window.setTimeout(() => setStage("hello-exit"), HELLO_DURATION);
    } else if (stage === "hello-exit") {
      timeoutId = window.setTimeout(() => setStage("loading"), FADE_DURATION);
    } else if (stage === "loading") {
      const startedAt = performance.now();

      intervalId = window.setInterval(() => {
        const elapsed = performance.now() - startedAt;
        const nextProgress = Math.min(100, Math.round((elapsed / LOADING_DURATION) * 100));

        setProgress(nextProgress);
        if (nextProgress === 100) {
          window.clearInterval(intervalId);
          setStage("loading-complete");
        }
      }, 40);
    } else if (stage === "loading-complete") {
      timeoutId = window.setTimeout(() => setStage("loading-exit"), COMPLETE_DURATION);
    } else if (stage === "loading-exit") {
      timeoutId = window.setTimeout(() => setStage("welcome"), FADE_DURATION);
    } else if (stage === "welcome") {
      timeoutId = window.setTimeout(() => setStage("welcome-exit"), WELCOME_DURATION);
    } else if (stage === "welcome-exit") {
      timeoutId = window.setTimeout(onComplete, FADE_DURATION);
    }

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [stage, onComplete]);

  return (
    <div
      className={`loading-screen ${stage === "welcome-exit" ? "loading-screen--exiting" : ""}`}
      aria-live="polite"
      aria-label={isLoading ? `Loading portfolio, ${progress}% complete` : "Loading portfolio"}
    >
      <div className="loading-screen__ambient" aria-hidden="true" />
      <div className="loading-screen__content">
        {(stage === "hello" || stage === "hello-exit") && (
          <p className={`loading-screen__greeting ${stage === "hello-exit" ? "is-leaving" : ""}`}>Hello</p>
        )}

        {isLoading && (
          <div
            className={`loading-screen__loader ${stage === "loading-exit" ? "is-leaving" : ""}`}
            style={{ "--progress": `${progress * 3.6}deg` }}
          >
            <div className="loading-screen__loader-core">
              <span className="loading-screen__percentage">{progress}%</span>
            </div>
          </div>
        )}

        {(stage === "welcome" || stage === "welcome-exit") && (
          <p className={`loading-screen__greeting ${stage === "welcome-exit" ? "is-leaving" : ""}`}>
            Welcome
          </p>
        )}
      </div>
    </div>
  );
}

export default LoadingScreen;
