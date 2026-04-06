import { useEffect, useRef, useState } from 'react';

export function useCounter(target, startAnimation, duration = 1800) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!startAnimation) {
      return undefined;
    }

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 4;

      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(animate);
      }
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameRef.current);
  }, [duration, startAnimation, target]);

  return count;
}
