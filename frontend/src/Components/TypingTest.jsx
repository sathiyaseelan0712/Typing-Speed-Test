import React from "react";
import { useLocation } from "react-router-dom";
const TypingTest = ({
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
  calculateAccuracy,
  calculateErrorPercentage,
  wpm,
}) => {
  const location = useLocation();
  const handleRestartClick = () => {
    resetTest();
    
  };

  const renderTestWords = () => {
    if (!testWords.length) return null;
  
    return testWords.map((word, index) => {
      let className = 'text-white';
  
      if (index < currentWordIndex) {
        className = 'text-green-400';
      } else if (index === currentWordIndex) {
        const typedWord = inputValue.trim();
        let isTyping = typedWord.length > 0;
  
        if (isTyping) {
          const isWordCorrect = word.startsWith(typedWord);
          className = isWordCorrect ? 'text-green-400' : 'text-red-400';
        }
      }
  
      return (
        <span key={index} className={className}>
          {word + (index < testWords.length - 1 ? ' ' : '')}
        </span>
      );
    });
  };
  

return (
    <div className="flex flex-col items-center w-full max-w-md p-6 bg-opacity-50 rounded-lg">
        <div className="flex justify-between items-center mb-6 w-full">
            <div className="flex flex-col items-center">
                <span className="text-yellow-400 text-lg mb-1 font-mono">Time</span>
                <span
                    className={`text-6xl font-anime font-bold ${
                        isTestActive ? "text-white" : "text-gray-500"
                    }`}
                >
                    {isTestActive ? timeLeft : timer}
                </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-yellow-400 text-lg mb-1 font-mono">CW</span>
                <span
                    className={`text-6xl font-anime font-bold ${
                        isTestActive ? "text-white" : "text-gray-500"
                    }`}
                >
                    {wordsCorrect}
                </span>
            </div>
        </div>
        {!isTestActive && location.pathname == "/home" && (
            <div className="flex justify-center items-center mb-8 space-x-16">
                <div className="flex flex-col items-center">
                    <button
                        id="thirty"
                        className={`text-lg text-white-500 font-anime font-bold ${
                            timer === 30 ? "text-yellow-400 font-bold" : "text-gray-400"
                        }`}
                        onClick={() => selectTimeLimit(30)}
                    >
                        30 S
                    </button>
                    <button
                        id="beg"
                        className={`text-lg text-white-500 font-mono  ${
                            difficulty === 1
                                ? "text-yellow-400 font-bold"
                                : "text-gray-400 "
                        }`}
                        onClick={() => selectDifficulty(1)}
                    >
                        Beginner
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        id="fortyFive"
                        className={`text-lg text-white-500 font-anime font-bold ${
                            timer === 45 ? "text-yellow-400 font-bold" : "text-gray-400"
                        }`}
                        onClick={() => selectTimeLimit(45)}
                    >
                        45 S
                    </button>
                    <button
                        id="inter"
                        className={`text-lg text-white-500 font-mono  ${
                            difficulty === 2
                                ? "text-yellow-400 font-bold"
                                : "text-gray-400 "
                        }`}
                        onClick={() => selectDifficulty(2)}
                    >
                        Intermediate
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        id="sixty"
                        className={`text-lg text-white-500 font-anime font-bold ${
                            timer === 60 ? "text-yellow-400 font-bold" : "text-gray-400"
                        }`}
                        onClick={() => selectTimeLimit(60)}
                    >
                        60s
                    </button>
                    <button
                        id="pro"
                        className={`text-lg text-white-500 font-mono  ${
                            difficulty === 3
                                ? "text-yellow-400 font-bold"
                                : "text-gray-400 "
                        }`}
                        onClick={() => selectDifficulty(3)}
                    >
                        Ultra
                    </button>
                </div>
            </div>
        )}
        <div className="w-full mb-8 font-mono text-lg font-bold">{renderTestWords()}</div>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className={`w-full p-2 border border-gray-300 rounded-lg font-mono text-lg font-extrabold ${
                isTestActive ? 'bg-white' : 'bg-gray-200'
            }`}
        />

        <div className="flex justify-between items-center mt-6 w-full">
            <div className="flex flex-col items-center">
                <span className="text-yellow-400 text-lg mb-1 font-mono font-extrabold">
                    Accuracy
                </span>
                <span className="text-4xl font-anime font-bold text-white">
                    {calculateAccuracy()}%
                </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-yellow-400 text-lg mb-1 font-mono font-extrabold">
                    Errors
                </span>
                <span className="text-4xl font-anime font-bold text-white">
                    {calculateErrorPercentage()}%
                </span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-yellow-400 text-lg mb-1 font-mono font-extrabold">
                    WPM
                </span>
                <span className="text-4xl font-anime font-bold text-white">
                    {wpm}
                </span>
            </div>
        </div>
        <button
            onClick={handleRestartClick}
            className="mt-6 px-4 py-2 bg-yellow-400 text-black rounded-2xl font-anime font-bold"
        >
            Restart Test
        </button>
    </div>
);
};
export default TypingTest;
