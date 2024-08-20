import { useContext, useEffect } from "react"; // Import useEffect from react package
import { useTypingTestLogic } from "../hooks/TypingTestLogic";
import TypingTest from "./TypingTest";
import { UserContext } from "../context/UserContext";

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
    startTest,
    wordsIncorrect, 
    calculateErrorPercentage, 
    setCurrentWordIndex,
    setInputValue
  } = useTypingTestLogic();

  const { userEmail, setUserName } = useContext(UserContext);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await fetch(`https://type-racer-api.vercel.app/api/auth/id?email=${userEmail}`);
        if (response.ok) {
          const data = await response.json();
          setUserName(data.name);
        } else {
          console.error("Error fetching name:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching name:", error);
      }
    };

    // Fetch the user's name only if it hasn't been set yet
    if (userEmail ) {
      fetchName();
    }
  }, [userEmail, setUserName]);

  return (
    <div>
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
        setCurrentWordIndex={setCurrentWordIndex}
        setInputValue={setInputValue}
      />
    </div>
  );
};

export default HomePage;
