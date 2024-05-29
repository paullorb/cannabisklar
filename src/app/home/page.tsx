"use client"

import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import initializeScrollspy from './useScrollspy';
import NavVertical from './NavVertical'; // Fix the import statement to use the correct filename

export default function Home() {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleIntersecting = (sectionId:string) => {
      setCurrentSection(sectionId);
      console.log('Intersecting section:', sectionId);
    };

    const observer = initializeScrollspy(handleIntersecting);

    // Cleanup function to unobserve sections when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className={styles.container}>
      <NavVertical currentSection={currentSection} />
      <section id="section1" className={`${styles.section} ${styles.section1}`}>Section 1</section>
      <section id="section2" className={`${styles.section} ${styles.section2}`}>Section 2</section>
      <section id="section3" className={`${styles.section} ${styles.section3}`}>Section 3</section>
      {currentSection && <div>Currently in view: {currentSection}</div>}
    </main>
  );
}
