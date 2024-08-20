/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Content = ({
  difficulty,
  timer,
  timeLeft,
  wordsCorrect,
  inputValue,
  isTestActive,
  testWords,
  currentWordIndex,
  handleInputChange,
  selectTimeLimit,
  selectDifficulty,
  resetTest,
  startTest,
  calculateAccuracy,
  calculateErrorPercentage,
  wpm,
}) => {
  const location = useLocation();
  const [inputValueHistory, setInputValueHistory] = useState([]); // Stores the typed words

  // Handle input and space key press
  const handleInput = (e) => {
    handleInputChange(e);
    if (e.key === " ") {
      handleSpaceKeyPress();
    }
  };

  // Function to handle space key press
  const handleSpaceKeyPress = () => {
    const trimmedWord = inputValue.trim();
    if (trimmedWord.length > 0) {
      setInputValueHistory([...inputValueHistory, trimmedWord]); // Add the typed word to history
      setCurrentWordIndex(currentWordIndex + 1); // Move to the next word
      setInputValue(""); // Clear the input field for the next word
    }
  };

  // Function to render the test words with appropriate colors
  const renderTestWords = () => {
    if (!testWords.length) {
      return null;
    }

    return testWords.map((word, index) => {
      let className = "text-white"; // Default color: white

      if (index < currentWordIndex) {
        // Check if the word was typed correctly
        const typedWord = inputValueHistory[index]?.trim() || "";
        className = typedWord.toLowerCase() === word.toLowerCase()
          ? "text-green-400"  // Correctly typed word: green
          : "text-red-400";    // Incorrectly typed word: red
      } else if (index === currentWordIndex) {
        className = "text-yellow-400"; // Current word being typed: yellow
      }

      return (
        <span key={index} className={className}>
          {word + (index < testWords.length - 1 ? " " : "")}
        </span>
      );
    });
  };

  useEffect(() => {
    if (!isTestActive) {
      setInputValueHistory([]); 
    }
  }, [isTestActive]);

  return (
    <div className="flex flex-col items-center w-full max-w-md p-6 bg-opacity-50 rounded-lg sm:w-full md:w-full lg:w-full">
      <div className="flex justify-between items-center mb-6 w-full">
        <div className="flex flex-col items-center">
          <span className="text-yellow-400 text-lg font-mono font-extrabold mb-1">Time</span>
          <span
            className={`text-6xl font-extrabold font-mono ${
              isTestActive ? "text-white" : "text-gray-500"
            }`}
          >
            {isTestActive ? timeLeft : timer}
          </span>
        </div>
        <div className="flex flex-col items-center font-mono font-extrabold">
          <span className="text-yellow-400 text-lg mb-1">Correct Words</span>
          <span
            className={`text-6xl font-bold font-mono ${
              isTestActive ? "text-white" : "text-gray-500"
            }`}
          >
            {wordsCorrect}
          </span>
        </div>
      </div>
      {!isTestActive && location.pathname === "/home" && (
        <div className="flex justify-center items-center mb-8 space-x-8 sm:space-x-16 md:space-x-12 lg:space-x-16">
          <div className="flex flex-col items-center">
            <button
              id="thirty"
              className={`text-xl md:text-2xl lg:text-3xl text-white font-mono font-bold ${
                timer === 30 ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => selectTimeLimit(30)}
            >
              30 S
            </button>
            <button
              id="beg"
              className={`text-lg md:text-xl lg:text-2xl text-white font-mono ${
                difficulty === 1 ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => selectDifficulty(1)}
            >
              Beginner
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              id="fortyFive"
              className={`text-xl md:text-2xl lg:text-3xl text-white font-mono font-bold ${
                timer === 45 ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => selectTimeLimit(45)}
            >
              45 S
            </button>
            <button
              id="inter"
              className={`text-lg md:text-xl lg:text-2xl text-white font-mono ${
                difficulty === 2 ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => selectDifficulty(2)}
            >
              Intermediate
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              id="sixty"
              className={`text-xl md:text-2xl lg:text-3xl text-white font-mono font-bold ${
                timer === 60 ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => selectTimeLimit(60)}
            >
              60 S
            </button>
            <button
              id="pro"
              className={`text-lg md:text-xl lg:text-2xl text-white font-mono ${
                difficulty === 3 ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => selectDifficulty(3)}
            >
              Ultra
            </button>
          </div>
        </div>
      )}
      <div className="w-full mb-8 font-mono text-lg md:text-xl lg:text-xl font-bold">
        {renderTestWords()}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInput}
        className={`w-full p-2 border border-gray-300 rounded-lg ${
          isTestActive ? "bg-white" : "bg-gray-200"
        }`}
        disabled={!isTestActive}
      />
      <div className="flex justify-between items-center mt-6 w-full">
        <div className="flex flex-col items-center">
          <span className="text-yellow-400 text-lg md:text-xl lg:text-2xl mb-1 font-mono font-extrabold">
            Accuracy
          </span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-white">
            {calculateAccuracy()}%
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-yellow-400 text-lg md:text-xl lg:text-2xl mb-1 font-mono font-extrabold">
            Errors
          </span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-white">
            {calculateErrorPercentage()}%
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-yellow-400 text-lg md:text-xl lg:text-2xl mb-1 font-mono font-extrabold">
            WPM
          </span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-white">
            {wpm}
          </span>
        </div>
      </div>
      <div className="flex justify-between w-full mt-6">
        <button
          onClick={() => {
            setInputValueHistory([]);
            resetTest();
          }}
          className="px-4 py-2 bg-white text-black font-mono rounded-3xl hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
        >
          RestartTest
        </button>
        <button
          onClick={() => {
            setInputValueHistory([]); // Reset the history when starting the test
            startTest();
          }}
          className="px-4 py-2 bg-white text-black font-mono rounded-3xl hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
        >
          StartTest
        </button>
      </div>      
    </div>
  );
};

export default Content;
