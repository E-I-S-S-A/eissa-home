import React, { useEffect, useRef, useState } from "react";
import styles from "./ExpandableLogo.module.css";

const fullForms = [
    ['asy', 'nformation ', 'haring &', 'torage', 'pps'],
    ['xploring', 'deas', 'oftware', 'ystems', 'rchitecture'],
];

const ExpandableLogo: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const appleRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fullForms.length);
    };

    useEffect(() => {
        const appleElement = appleRef.current;
        if (appleElement) {
            appleElement.addEventListener('mouseenter', handleMouseEnter);
        }

        return () => {
            if (appleElement) {
                appleElement.removeEventListener('mouseenter', handleMouseEnter);
            }
        };
    }, []);

    const currentWords = fullForms[currentIndex];

    return (<div ref={appleRef} className={styles.acronym}>
      <span className={styles.first}>E</span>
      <span className={styles.rest}>{currentWords[0]}</span>&nbsp;

      <span className={styles.first}>I</span>
      <span className={styles.rest}>{currentWords[1]}</span>&nbsp;

      <span className={styles.first}>S</span>
      <span className={styles.rest}>{currentWords[2]}</span>&nbsp;

      <span className={styles.first}>S</span>
      <span className={styles.rest}>{currentWords[3]}</span>&nbsp;

      <span className={styles.first}>A</span>
      <span className={styles.rest}>{currentWords[4]}</span>&nbsp;
    </div>
    );
};

export default ExpandableLogo;
