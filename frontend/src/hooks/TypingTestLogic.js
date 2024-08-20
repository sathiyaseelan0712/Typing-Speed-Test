import { useState, useEffect, useCallback } from "react";

const beginnerWords = [
  "cat", "dog", "book", "car", "sun", "mat", "apple", "ball", "hat", "sky",
  "run", "jump", "fish", "tree", "star", "moon", "bird", "rain", "snow", "wind",
  "blue", "red", "green", "yellow", "orange", "purple", "pink", "white", "black", "brown",
  "house", "home", "school", "friend", "family", "happy", "sad", "good", "bad", "fun",
  "play", "sing", "dance", "read", "write", "draw", "paint", "build", "break", "fix",
  "eat", "drink", "sleep", "wake", "work", "rest", "laugh", "cry", "talk", "listen",
  "smile", "frown", "shout", "whisper", "begin", "end", "stop", "go", "come", "leave",
  "small", "big", "short", "long", "hot", "cold", "warm", "cool", "soft", "hard",
  "day", "night", "morning", "evening", "noon", "afternoon", "week", "month", "year", "time"
];

const intermediateWords = [
  "quick", "brown", "fox", "jumps", "lazy", "enjoy", "hiking", "mountains", "summer", "artist",
  "beautiful", "landscape", "countryside", "decided", "movie", "dinner", "received", "letter", "friend", "mail",
  "challenge", "improve", "skill", "practice", "explore", "nature", "outdoor", "activity", "hobby", "weekend",
  "journey", "adventure", "discover", "exciting", "scenic", "view", "trail", "forest", "river", "lake",
  "relax", "recharge", "escape", "city", "urban", "noise", "pollution", "quiet", "peaceful", "serene",
  "exercise", "health", "benefit", "physical", "mental", "wellness", "stress", "relief", "mind", "body",
  "challenge", "goal", "achievement", "success", "progress", "effort", "dedication", "motivation", "discipline", "focus",
  "sunset", "sunrise", "evening", "twilight", "dusk", "dawn", "starry", "night", "clear", "sky",
  "experience", "memory", "moment", "capture", "photograph", "image", "frame", "album", "journey", "travel"
];

const proWords = [
  "relativity", "fundamentally", "understanding", "physics", "universe", "angry", "regarded", "created", "stormy", "poodle",
  "seashells", "seashore", "theory", "question", "problem", "solution", "equation", "formula", "calculation", "scientific",
  "paradox", "dilemma", "hypothesis", "experiment", "evidence", "conclusion", "interpretation", "analysis", "research", "inquiry",
  "literature", "criticism", "narrative", "metaphor", "symbolism", "allegory", "theme", "motif", "genre", "structure",
  "aesthetics", "philosophy", "ethics", "morality", "conscience", "virtue", "vice", "existential", "absurd", "nihilism",
  "rhetoric", "dialectic", "discourse", "argument", "persuasion", "debate", "dialogue", "monologue", "soliloquy", "oration",
  "syllogism", "proposition", "premise", "conclusion", "validity", "truth", "proof", "evidence", "fallacy", "cognitive",
  "dissonance", "bias", "prejudice", "stereotype", "discrimination", "oppression", "liberation", "emancipation", "freedom", "justice"
];

export const useTypingTestLogic = () => {
  const [difficulty, setDifficulty] = useState(1); // 1 = Beginner, 2 = Intermediate, 3 = Pro
  const [timer, setTimer] = useState(30);
  const [timeLeft, setTimeLeft] = useState(timer);
  const [wordsSubmitted, setWordsSubmitted] = useState(0);
  const [wordsCorrect, setWordsCorrect] = useState(0);
  const [wordsIncorrect, setWordsIncorrect] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isTestActive, setIsTestActive] = useState(false);
  const [testWords, setTestWords] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  const generateTestWords = useCallback((diff) => {
    const wordsPool = diff === 1 ? beginnerWords : diff === 2 ? intermediateWords : proWords;
    const wordCount = 25;
    let generatedWords = [];
    for (let i = 0; i < wordCount; i++) {
      const word = wordsPool[Math.floor(Math.random() * wordsPool.length)];
      generatedWords.push(word);
    }
    setTestWords(generatedWords);
    setCurrentWordIndex(0); // Reset the index when generating new words
    setInputValue("");
  }, []);
  

  useEffect(() => {
    generateTestWords(difficulty);
  }, [difficulty, generateTestWords]);

  const endTest = useCallback(() => {
    clearInterval(intervalId);
    setIsTestActive(false);
    setInputValue("");
  }, [intervalId]);

  useEffect(() => {
    if (timeLeft === 0) {
      endTest();
    }
  }, [timeLeft, endTest]);

  // Function to start the test
  const startTest = useCallback(() => {
    if (!isTestActive) {
      setIsTestActive(true);
      setTimeLeft(timer);
      setWordsSubmitted(0);
      setWordsCorrect(0);
      setWordsIncorrect(0);
      const id = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    }
  }, [isTestActive, timer]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.endsWith(" ")) {
      checkWord();
    } 
  };

  const checkWord = () => {
    const wordEntered = inputValue.trim();
    setInputValue("");
    setWordsSubmitted((prev) => prev + 1);

    if (testWords[currentWordIndex] === wordEntered) {
      setWordsCorrect((prev) => prev + 1);
    } else {
      setWordsIncorrect((prev) => prev + 1);
    }

    if (currentWordIndex < testWords.length - 1) {
      setCurrentWordIndex((prev) => prev + 1);
    } else {
      generateTestWords(difficulty);
    }
  };

  const resetTest = () => {
    clearInterval(intervalId);
    setWordsSubmitted(0);
    setWordsCorrect(0);
    setWordsIncorrect(0);
    setTimeLeft(timer);
    setIsTestActive(false);
    setCurrentWordIndex(0);
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
    return wordsSubmitted !== 0
      ? Math.floor((wordsCorrect / wordsSubmitted) * 100)
      : 0;
  };

  const calculateErrorPercentage = () => {
    return wordsSubmitted !== 0
      ? Math.floor((wordsIncorrect / wordsSubmitted) * 100)
      : 0;
  };

  const wpm = wordsCorrect * (timer === 30 ? 2 : timer === 45 ? 1.33 : 1);

  return {
    difficulty,
    timer,
    timeLeft,
    wordsCorrect,
    wordsIncorrect,
    inputValue,
    isTestActive,
    testWords,
    currentWordIndex,
    handleInputChange,
    selectTimeLimit,
    selectDifficulty,
    resetTest,
    startTest, // Include startTest in the return object
    calculateAccuracy,
    calculateErrorPercentage,
    wpm,
    setCurrentWordIndex,
    setInputValue
  };
};