import { useTypingTestLogic } from "../hooks/TypingTestLogic";
import TypingTest from "./TypingTest";
const Home = () => {
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
    startTest,
    calculateAccuracy,
    wpm,
    wordsIncorrect, 
    calculateErrorPercentage, 
  } = useTypingTestLogic();

  return (

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
        startTest={startTest}
        calculateAccuracy={calculateAccuracy}
        calculateErrorPercentage={calculateErrorPercentage}
        wpm={wpm}
      />
  );
};

export default Home;