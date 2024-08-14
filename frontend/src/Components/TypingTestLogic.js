import { useState, useEffect } from "react";

const beginnerSentences = [
    "The cat is on the mat.",
    "I love to read books.",
    "She has a red car.",
    "The sun rises in the east.",
    "He plays soccer every day."
];

const intermediateSentences = [
    "The quick brown fox jumps over the lazy dog.",
    "I enjoy hiking in the mountains during the summer.",
    "She received a letter from her friend in the mail.",
    "The artist painted a beautiful landscape of the countryside.",
    "They decided to watch a movie after dinner."
];

const proSentences = [
    "To be or not to be, that is the question.",
    "The theory of relativity fundamentally changed our understanding of physics.",
    "In the beginning, the universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    "She sold seashells by the seashore, despite the stormy weather.",
    "The quick brown fox jumps over the lazy dog, while the energetic poodle runs circles around them."
];

export const useTypingTestLogic = () => {
  const [difficulty, setDifficulty] = useState(1); // 1 = Beginner, 2 = Intermediate, 3 = Pro
  const [timer, setTimer] = useState(30);
  const [timeLeft, setTimeLeft] = useState(timer);
  const [wordsSubmitted, setWordsSubmitted] = useState(0);
  const [wordsCorrect, setWordsCorrect] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isTestActive, setIsTestActive] = useState(false);
  const [testSentence, setTestSentence] = useState(""); // Change from testWords to testSentence
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    generateTestSentence(difficulty);
  }, [difficulty]);

  useEffect(() => {
    if (timeLeft === 0) {
      endTest();
    }
  }, [timeLeft]);

  const generateTestSentence = (diff) => {
    const sentence = randomSentence(diff);
    setTestSentence(sentence);
    console.log("Generated Sentence:", sentence); // Print the sentence
    setCurrentWordIndex(0);
    setInputValue("");
  };

  const randomSentence = (diff) => {
    switch(diff) {
      case 1:
        return beginnerSentences[Math.floor(Math.random() * beginnerSentences.length)];
      case 2:
        return intermediateSentences[Math.floor(Math.random() * intermediateSentences.length)];
      case 3:
        return proSentences[Math.floor(Math.random() * proSentences.length)];
      default:
        return beginnerSentences[Math.floor(Math.random() * beginnerSentences.length)];
    }
  };

  const startTest = () => {
    setIsTestActive(true);
    const id = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    setIntervalId(id);
  };

  const endTest = () => {
    clearInterval(intervalId);
    setIsTestActive(false);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    const charEntered = event.nativeEvent.data;
    if (!isTestActive) {
      startTest();
    }
    if (/\s/g.test(charEntered)) {
      checkWord();
    } else {
      setInputValue(event.target.value);
      currentWord(); // Call currentWord to potentially update the UI (if used in conjunction with the return value)
    }
  };

  const checkWord = () => {
    const wordEntered = inputValue.trim();
    setInputValue("");
    setWordsSubmitted((prev) => prev + 1);

    const words = testSentence.split(" ");
    if (words[currentWordIndex] === wordEntered) {
      setWordsCorrect((prev) => prev + 1);
    }
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex((prev) => prev + 1);
    } else {
      generateTestSentence(difficulty);
    }
  };

  const resetTest = () => {
    clearInterval(intervalId);
    setWordsSubmitted(0);
    setWordsCorrect(0);
    setTimeLeft(timer);
    setIsTestActive(false);
    generateTestSentence(difficulty);
  };

  const selectTimeLimit = (time) => {
    setTimer(time);
    setTimeLeft(time);
    setIsTestActive(false);
  };

  const selectDifficulty = (diff) => {
    setDifficulty(diff);
    generateTestSentence(diff);
  };

  const calculateAccuracy = () => {
    return wordsSubmitted !== 0 ? Math.floor((wordsCorrect / wordsSubmitted) * 100) : 0;
  };

  const wpm = wordsCorrect * (timer === 30 ? 2 : timer === 45 ? 1.33 : 1);

  return {
    difficulty,
    timer,
    timeLeft,
    wordsCorrect,
    inputValue,
    isTestActive,
    testSentence,
    currentWordIndex,
    handleInputChange,
    selectTimeLimit,
    selectDifficulty,
    resetTest,
    calculateAccuracy,
    wpm,
  };
};
