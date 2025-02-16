import React, { useEffect, useState } from "react";
import "./App.css";

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="game-container">
      <h1>Stickman Jump</h1>
      <div className="game-area">
        <div className="stickman"></div>
        <div className="obstacle"></div>
      </div>
    </div>
  );
}

export default App;


const App = () => {
  const [stickmanY, setStickmanY] = useState(150);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacleX, setObstacleX] = useState(100);
  const [speed, setSpeed] = useState(2);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setObstacleX((prev) => (prev > -20 ? prev - speed : 100));
      if (speed < 10) setSpeed((prev) => prev + 0.001);
    }, 16);

    return () => clearInterval(gameLoop);
  }, [speed]);

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setStickmanY(50);
      setTimeout(() => {
        setStickmanY(150);
        setIsJumping(false);
      }, 500);
    }
  };

  return (
    <div className="game-container">
      <h1>Stickman Jump</h1>
      <div className="game-area" onClick={handleJump}>
        <div className="stickman" style={{ bottom: `${stickmanY}px` }}></div>
        <div className="obstacle" style={{ left: `${obstacleX}%` }}></div>
      </div>
      <p>Click to jump!</p>
    </div>
  );
};

export default App;
