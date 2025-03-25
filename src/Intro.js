import React, { Suspense, useState, useEffect, useCallback, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Earth } from './Earth'; // Import the existing Earth component
import "./Intro.css"

const Intro = () => {
  const toRotate = useMemo(() => 
    ["Back-End Developer", "Web Developer", "Software Engineer"], 
    []
  );

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300);

  const tick = useCallback(() => {
    const fullText = toRotate[loopNum % toRotate.length];
    const updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prev) => (prev + 1) % toRotate.length);
      setDelta(300);
    } else {
      setDelta(isDeleting ? 100 : 150);
    }
  }, [loopNum, isDeleting, text, toRotate]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    
    return () => { clearInterval(ticker) };
  }, [tick, delta]);

  return (
    <section className="intro-section">
      <div className="typewriter-container">
        <h1>Hi! I'm Arkapratim,</h1>
        <h2 className="typing-wrapper">
          <span
            className="txt-rotate"
            data-period="1000"
            data-rotate='[ "Back-End Developer", "Web Developer", "Software Engineer" ]'
          >
            <span className="wrap">{text}</span>
          </span>
        </h2>
      </div>

      <div className="earth-section">
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 45 }}
          className="earth-canvas"
        >
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Intro;