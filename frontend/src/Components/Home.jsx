// HomePage.jsx
import React from "react";
import { useTypingTestLogic } from "./TypingTestLogic";
import Background from "../Sections/Background"; // Ensure the filename is correct
import Header from "../Sections/Header";
import Content from "../Sections/Content";

const HomePage = () => {
  const {
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
    calculateAccuracy,
    wpm,
  } = useTypingTestLogic();

  return (
    <>
      <Background />
      <Header />
      <Content 
        difficulty={difficulty}
        timer={timer}
        timeLeft={timeLeft}
        wordsCorrect={wordsCorrect}
        inputValue={inputValue}
        isTestActive={isTestActive}
        testWords={testWords}
        currentWordIndex={currentWordIndex}
        handleInputChange={handleInputChange}
        selectTimeLimit={selectTimeLimit}
        selectDifficulty={selectDifficulty}
        resetTest={resetTest}
        calculateAccuracy={calculateAccuracy}
        wpm={wpm}
      />
    </>
  );
};

export default HomePage;
