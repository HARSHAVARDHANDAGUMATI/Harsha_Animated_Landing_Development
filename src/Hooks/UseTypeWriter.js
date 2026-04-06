import { useEffect, useState } from 'react';

export function useTypeWriter(words, typingSpeed = 95, deletingSpeed = 45, pause = 1400) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && displayText.length < currentWord.length) {
      timeout = window.setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayText.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
      }, 80);
    }

    return () => window.clearTimeout(timeout);
  }, [deletingSpeed, displayText, isDeleting, pause, typingSpeed, wordIndex, words]);

  return displayText;
}
