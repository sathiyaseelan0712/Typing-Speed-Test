import React from "react";
import { useTypingTestLogic } from "./TypingTestLogic";
import Background from "../Sections/Background"; // Ensure the filename is correct
import Content from "../Sections/Content";
import Header from "../Sections/Header";

const HomePage = () => {
  const {
    difficulty,
    timer,
    timeLeft,
    wordsCorrect,
    inputValue,
    isTestActive,
    testSentence, // Use testSentence
    currentWordIndex,
    handleInputChange,
    selectTimeLimit,
    selectDifficulty,
    resetTest,
    calculateAccuracy,
    wpm,
  } = useTypingTestLogic();

  return (
    <Background>
      <Content 
        difficulty={difficulty}
        timer={timer}
        timeLeft={timeLeft}
        wordsCorrect={wordsCorrect}
        inputValue={inputValue}
        isTestActive={isTestActive}
        testSentence={testSentence} // Pass testSentence
        currentWordIndex={currentWordIndex}
        handleInputChange={handleInputChange}
        selectTimeLimit={selectTimeLimit}
        selectDifficulty={selectDifficulty}
        resetTest={resetTest}
        calculateAccuracy={calculateAccuracy}
        wpm={wpm}
      />
    </Background>
  );
};

export default HomePage;
