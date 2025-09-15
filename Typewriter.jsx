import React, { useState, useEffect } from "react";

export default function Typewriter({ text = "", speed = 70, className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    if (!text) return;
    const interval = setInterval(() => {
      setIndex(prev => {
        if (prev < text.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  // Only show up to the current index
  const displayed = text.slice(0, index);

  // Render line breaks
  return (
    <span className={className}>
      {displayed.split("\n").map((line, idx, arr) =>
        idx < arr.length - 1 ? (
          <React.Fragment key={idx}>{line}<br /></React.Fragment>
        ) : (
          line
        )
      )}
    </span>
  );
}