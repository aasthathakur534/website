import "./Hero.css";

const Hero = ({ heroCount, setPlayStatus, handleNext, handlePrev }) => {
  const heroText = [
    { text: "Explore the world", buttonText: "Start Video" },
    { text: "Adventure awaits", buttonText: "Start Video" },
    { text: "Discover new places", buttonText: "Start Video" },
  ];

  return (
    <div className="hero">
      <h1>{heroText[heroCount].text}</h1>
      <div className="hero-buttons">
        <button onClick={() => setPlayStatus(true)}>
          {heroText[heroCount].buttonText}
        </button>
      </div>

      {/* ✅ arrows fixed */}
      <div className="arrows">
        <button onClick={handlePrev}>⬅️</button>
        <button onClick={handleNext}>➡️</button>
      </div>
    </div>
  );
};

export default Hero;
