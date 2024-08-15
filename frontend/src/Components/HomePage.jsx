import React, { useContext } from "react";
import { useTypingTestLogic } from "../hooks/TypingTestLogic";
import TypingTest from "./TypingTest";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

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
    wordsIncorrect, 
    calculateErrorPercentage, 
  } = useTypingTestLogic();

  const { userEmail } = useContext(UserContext);
  console.log(userEmail);
  return (
    <div>
      <div className="flex justify-between items-center p-4">

        {userEmail &&(
          <span className="text-white font-mono font-bold">{userEmail}</span>
        ) 
        }
      </div>
      <TypingTest
        difficulty={difficulty}
        timer={timer}
        timeLeft={timeLeft}
        wordsCorrect={wordsCorrect}
        wordsIncorrect={wordsIncorrect} 
        inputValue={inputValue}
        isTestActive={isTestActive}
        testWords={testWords}
        currentWordIndex={currentWordIndex}
        handleInputChange={handleInputChange}
        selectTimeLimit={selectTimeLimit}
        selectDifficulty={selectDifficulty}
        resetTest={resetTest}
        calculateAccuracy={calculateAccuracy}
        calculateErrorPercentage={calculateErrorPercentage}
        wpm={wpm}
      />
    </div>
  );
};

export default HomePage;
