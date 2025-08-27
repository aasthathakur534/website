import { useState } from "react";
import Hero from "./Components/Hero/Hero";
import Background from "./Components/Background/Background";

function App() {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  // ✅ cycle next
  const handleNext = () => {
    setHeroCount((prev) => (prev + 1) % 3); // 0→1→2→0
  };

  // ✅ cycle prev
  const handlePrev = () => {
    setHeroCount((prev) => (prev - 1 + 3) % 3); // 0→2→1→0
  };

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        heroCount={heroCount}
        setPlayStatus={setPlayStatus}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default App;
