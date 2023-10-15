import React, { useState, useEffect } from 'react';

const FrontTask = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [boxColor, setBoxColor] = useState('');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(40);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  useEffect(() => {
    let intervalId;
    let timeoutId;

    const changeBoxColor = () => {
      const colors = ['red', 'green', 'blue', 'yellow'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBoxColor(randomColor);
    };

    if (gameStarted && !gameOver) {
      changeBoxColor();
      intervalId = setInterval(changeBoxColor, Math.floor(Math.random() * 1000) + 1000);

      timeoutId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 0) {
            setGameOver(true);
            clearInterval(intervalId);
            clearInterval(timeoutId);
            return prevTime;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      clearInterval(timeoutId);
    };
  }, [gameStarted, gameOver]);

  const handleBoxClick = () => {
    if (boxColor === 'green' && !gameOver) {
      setScore(score + 1);
      if (score + 1 === getWinningScore()) {
        setGameOver(true);
      }
    } else {
      setGameOver(true);
    }
  };

  const getWinningScore = () => {
    switch (difficulty) {
      case 'Easy':
        return 10;
      case 'Medium':
        return 15;
      case 'Hard':
        return 25;
      default:
        return 10;
    }
  };

  const handleStartGame = () => {
    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }

    if (!mobileNumber) {
      setMobileNumberError('Mobile Number is required');
    } else {
      setMobileNumberError('');
    }

    if (name && email && mobileNumber) {
      setGameStarted(true);
    }
  };

  const handleTryAgain = () => {
    setGameStarted(false);
    setGameOver(false);
    setTimeRemaining(40);
    setScore(0);
  };

  return (
    <div className="container">
      <div className="game-container">
        {!gameStarted && !gameOver ? (
          <div>
            <h1>Game</h1>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              {nameError && <div className="error">{nameError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {emailError && <div className="error">{emailError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input type="tel" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
              {mobileNumberError && <div className="error">{mobileNumberError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="difficulty">Difficulty Level:</label>
              <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <button onClick={handleStartGame}>Start Game</button>
          </div>
        ) : (
          <div>
            <div
              className="color-box"
              style={{
                backgroundColor: boxColor,
              }}
              onClick={handleBoxClick}
            ></div>
            <div className="info">
              <h2>Score: {score}</h2>
              <h2>Time Remaining: {timeRemaining}</h2>
              {gameOver && <h2>Game Over</h2>}
              {gameOver && <button onClick={handleTryAgain}>Try Again</button>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FrontTask;
