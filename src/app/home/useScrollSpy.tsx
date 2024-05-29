import { useState, useEffect, useRef } from 'react';

const useScrollspy = (elements: HTMLElement[]): number => {
  const [currentIntersectingElementIndex, setCurrentIntersectingElementIndex] = useState<number>(-1);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const indexOfElementIntersecting = entries.findIndex(entry => entry.isIntersecting);
      setCurrentIntersectingElementIndex(indexOfElementIntersecting);
    });

    elements.forEach(element => {
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [elements]);

  return currentIntersectingElementIndex;
};

export default useScrollspy;
