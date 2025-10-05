import { useEffect, useState } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-primary animate-pulse">
          EcoVision
        </h1>
        <p className="text-lg text-muted-foreground">Loading Experience</p>
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-primary via-primary-light to-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-2xl font-semibold text-primary">{progress}%</p>
      </div>
    </div>
  );
};

export default Loader;
