import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import mountainImg from "./mountains.png";
import planetImg from "./planets.png";
import sunImg from "./sun.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AboutSection from "./AboutSection";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const [index, setIndex] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const toRotate = ["Web Developer", "Back-End Developer",  "Software Engineer"];
  const period = 1300;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    
    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    } else {
      setDelta(150);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500); 
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mountainOffset = 100; 
  const planetOffset =10;
  const fadeThreshold = 200;

  const mountainOpacity =
    scrollY < mountainOffset
      ? 1
      : Math.max(1 - (scrollY - mountainOffset) / fadeThreshold, 0);
  const planetOpacity =
    scrollY < planetOffset
      ? 1
      : Math.max(1 - (scrollY - planetOffset) / fadeThreshold, 0);
  const sunOpacity = 0;

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} xl={8} className="text-container">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Hi! I'm Arkapratim,</h1>
                  <h2 className="typing-wrapper">
                    <span
                      className="txt-rotate"
                      data-period="1000"
                      data-rotate='[ "Web Developer", "Back-End Developer", "Software Engineer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <div className="img-wrapper">
        <div 
          className="mountain-img"
          style={{ opacity: mountainOpacity, transition: "opacity 0.2s ease-out" }}
        >
          <img src={mountainImg} alt="Mountains" />
        </div>
        <div 
          className="planet-img"
          style={{ opacity: planetOpacity, transition: "opacity 0.2s ease-out" }}
        >
          <img src={planetImg} alt="Planet" />
        </div>
        <div 
          className="sun-img"
          style={{ sunOpacity, transition: "opacity 0.2s ease-out" }}
        >
          <img src={sunImg} alt="Sun" />
        </div>
      </div>
      <div className="banner-about">
        <AboutSection />
      </div>
    </section>
  );
}