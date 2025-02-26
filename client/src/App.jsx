import './App.css';
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import OneAccount from './components/OneAccount';
import Visa from './components/Visa';
import Phones from './components/Phones';
import Fiat from './components/Fiat';
import Paragraph from './components/Paragraph';
import Footer from './components/Footer';

function App() {
  const lst = {
    photo: "VISA CARD PIC",
    sentence: " it for convenience or for privacy, the MELD debit card is a powerful tool.",
    para: "For those who want to spend and not worry about being blocked or frozen out of your account.",
    info1_t: "16 Currencies",
    info2_t: "Low FX Fees",
    info1: "Send and receive EUR, USD, GBP, JPY, CHF, AUD, SDG, CAD, SEK, DKK, PLN, RON, HUF, HKD and AED.",
    info2: "Convert between different fiat currencies and between fiat and crypto for as low as 0.5%.",
    info1Pic: "https://meld.fi/_next/static/media/note_white_icon.b65bd3c9.svg",
    info2Pic: "https://meld.fi/_next/static/media/currency.6dfb868f.svg",
  };

  const man = {
    photo: "GUY PIC",
    sentence: " your share of the crypto world and earn passive income.",
    para: "You can stake your crypto and earn up to 8%* APY in passive income. Make your crypto work for you.",
    info1_t: "Token Staking",
    info2_t: "Earn up to 8.4%* APY",
    info1: "Make the most out of your tokens and stake them to earn a yield on them while in your wallet.",
    info2: "Each token has a different yielding amount based on many factors. We support staking on many chains.",
    info1Pic: "https://meld.fi/_next/static/media/note_white_icon.b65bd3c9.svg",
    info2Pic: "https://meld.fi/_next/static/media/currency.6dfb868f.svg",
  };

  const [activeColor, setActiveColor] = useState('');
  const sectionsRef = useRef([]); // Ref to store section elements

  useEffect(() => {
    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active color based on the section's data-color attribute
            const color = entry.target.getAttribute('data-color');
            setActiveColor(color);

            // Snap to the section when it intersects
            entry.target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      },
      {
        threshold: 0.2, // Snap when 50% of the section is visible
      }
    );

    // Observe each section
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* Header outside the App div */}
      <Header />

      {/* App content with scroll snapping */}
      <div className={`App ${activeColor ? 'color-' + activeColor : ''}`}>
        <div data-color="red" ref={(el) => (sectionsRef.current[0] = el)}>
          <LandingPage />
        </div>
        <div data-color="white" ref={(el) => (sectionsRef.current[1] = el)}>
          <OneAccount />
        </div>
        <div data-color="red" ref={(el) => (sectionsRef.current[2] = el)}>
          <Visa
            photo={lst.photo}
            sentence={lst.sentence}
            para={lst.para}
            info1_t={lst.info1_t}
            info2_t={lst.info2_t}
            info1={lst.info1}
            info2={lst.info2}
            info1Pic={lst.info1Pic}
            info2Pic={lst.info2Pic}
          />
        </div>
        <div data-color="white" ref={(el) => (sectionsRef.current[3] = el)}>
          <Phones />
        </div>
        <div data-color="red" ref={(el) => (sectionsRef.current[4] = el)}>
          <Visa
            photo={man.photo}
            sentence={man.sentence}
            para={man.para}
            info1_t={man.info1_t}
            info2_t={man.info2_t}
            info1={man.info1}
            info2={man.info2}
            info1Pic={man.info1Pic}
            info2Pic={man.info2Pic}
          />
        </div>
        <div data-color="white" ref={(el) => (sectionsRef.current[5] = el)}>
          <Fiat />
        </div>
        <div data-color="red" ref={(el) => (sectionsRef.current[6] = el)}>
          <Paragraph />
        </div>
        <div data-color="white" ref={(el) => (sectionsRef.current[7] = el)}>
          <Footer />
        </div>
      </div>

      {/* BlankSpace outside the App div */}
      <div className="BlankSpace" />
    </>
  );
}

export default App;