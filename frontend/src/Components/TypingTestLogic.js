// TypingTestLogic.js
import { useState, useEffect } from "react";

const basicWords = [
  "a", "about", "above", "across", "act", "add", "afraid", "after", "again",
  "age", "ago", "agree", "air", "all", "alone", "along", "always", "am",
  "amount", "an", "and", "angry", "another", "answer", "any", "anyone", "appear",
];

const topWords = [
  "ability", "able", "about", "above", "accept", "according", "account",
  "across", "action", "activity", "actually", "address", "administration",
  "admit", "adult", "affect", "after", "again", "against", "agency", "agent",
];

export const useTypingTestLogic = () => {
  const [difficulty, setDifficulty] = useState(1);
  const [timer, setTimer] = useState(30);
  const [timeLeft, setTimeLeft] = useState(timer);
  const [wordsSubmitted, setWordsSubmitted] = useState(0);
  const [wordsCorrect, setWordsCorrect] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isTestActive, setIsTestActive] = useState(false);
  const [testWords, setTestWords] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    generateTestWords(difficulty);
  }, [difficulty]);

  useEffect(() => {
    if (timeLeft === 0) {
      endTest();
    }
  }, [timeLeft]);

  const generateTestWords = (diff) => {
    const words = randomWords(diff);
    setTestWords(words);
    setCurrentWordIndex(0);
    setInputValue("");
  };

  const randomWords = (diff) => {
    const wordList = diff === 1 ? basicWords : topWords;
    return Array.from({ length: 50 }, () =>
      wordList[Math.floor(Math.random() * wordList.length)]
    );
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
      currentWord();
    }
  };

  const checkWord = () => {
    const wordEntered = inputValue.trim();
    setInputValue("");
    setWordsSubmitted((prev) => prev + 1);
    if (testWords[currentWordIndex] === wordEntered) {
      setWordsCorrect((prev) => prev + 1);
    }
    if (currentWordIndex < testWords.length - 1) {
      setCurrentWordIndex((prev) => prev + 1);
    } else {
      generateTestWords(difficulty);
    }
  };

  const currentWord = () => {
    const currentWord = testWords[currentWordIndex];
    const enteredWord = inputValue;
    const correctPart = currentWord.slice(0, enteredWord.length);
    if (enteredWord === correctPart) {
      colorSpan("current");
    } else {
      colorSpan("wrong");
    }
  };

  const colorSpan = (status) => {
    const wordSpans = document.getElementsByClassName("word");
    wordSpans[currentWordIndex].className = `word ${status}`;
  };

  const resetTest = () => {
    clearInterval(intervalId);
    setWordsSubmitted(0);
    setWordsCorrect(0);
    setTimeLeft(timer);
    setIsTestActive(false);
    generateTestWords(difficulty);
  };

  const selectTimeLimit = (time) => {
    setTimer(time);
    setTimeLeft(time);
    setIsTestActive(false);
  };

  const selectDifficulty = (diff) => {
    setDifficulty(diff);
    generateTestWords(diff);
  };

  const calculateAccuracy = () => {
    return wordsSubmitted !== 0 ? Math.floor((wordsCorrect / wordsSubmitted) * 100) : 0;
  };

  const wpm = wordsCorrect * (timer === 30 ? 2 : 1);

  return {
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
  };
};
