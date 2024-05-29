"use client"

import { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import useScrollspy from './useScrollSpy';

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const currentSectionIndex = useScrollspy(sectionsRef.current.filter((el): el is HTMLElement => el !== null));

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('section'));
  }, []);

  return (
    <div>
      <nav>
        <a href="#section1" className={currentSectionIndex === 0 ? styles.active : ''}>Section 1</a>
        <a href="#section2" className={currentSectionIndex === 1 ? styles.active : ''}>Section 2</a>
      </nav>
      <section id="section1" ref={el => { sectionsRef.current[0] = el; }}>
        {/* Section 1 content */}
      </section>
      <section id="section2" ref={el => { sectionsRef.current[1] = el; }}>
        {/* Section 2 content */}
      </section>
    </div>
  );
}
