import React, { useState } from 'react';
import restartStatic from '../assets/reset1.png'; // Static image (first frame of the GIF)
import restartGif from '../assets/reset.gif'; // Animated GIF

const Content = ({ 
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
    wpm 
}) => {
    const [isGifActive, setGifActive] = useState(false);

    const handleRestartClick = () => {
        setGifActive(true);
        resetTest();

        // Reset the GIF back to the static image after a short delay
        setTimeout(() => {
            setGifActive(false);
        }, 1800); 
    };

    const renderTestWords = () => {
        if (!testSentence) {
            return null;
        }

        const words = testSentence.split(" ");
        return words.map((word, index) => {
            let className = "text-white";

            if (index < currentWordIndex) {
                className += " text-green-400"; // Correct words
            } else if (index === currentWordIndex) {
                const typedWord = inputValue.trim();
                if (typedWord === word) {
                    className += " text-green-400"; 
                } else if (typedWord && !word.startsWith(typedWord)) {
                    className += " text-red-400"; // Incorrectly typed current word
                }
            }

            return (
                <span key={index} className={className}>
                    {word}{" "}
                </span>
            );
        });
    };

    return (
        <div className="flex flex-col items-center w-full max-w-md p-6 bg-opacity-50 rounded-lg">
            <div className="flex justify-between items-center mb-6 w-full">
                <div className="flex flex-col items-center">
                    <span className="text-yellow-400 text-sm mb-1">Time</span>
                    <span className="text-6xl text-gray-500 font-bold">
                        {isTestActive ? timeLeft : timer}
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-yellow-400 text-sm mb-1">CW</span>
                    <span className="text-6xl text-gray-500 font-bold">
                        {wordsCorrect}
                    </span>
                </div>
            </div>

            <div className="flex justify-center items-center mb-8 space-x-16">
                <div className="flex flex-col items-center">
                    <button
                        id="thirty"
                        className={`text-lg ${timer === 30 ? "text-yellow-400 font-bold" : "text-gray-400"}`}
                        onClick={() => selectTimeLimit(30)}
                    >
                        30s
                    </button>
                    <button
                        id="beg"
                        className={`text-lg ${difficulty === 1 ? "text-yellow-400 font-bold" : "text-gray-400"}`}
                        onClick={() => selectDifficulty(1)}
                    >
                        beginner
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        id="fortyFive"
                        className={`text-lg ${timer === 45 ? "text-yellow-400 font-bold" : "text-gray-400"}`}
                        onClick={() => selectTimeLimit(45)}
                    >
                        45s
                    </button>
                    <button
                        id="int"
                        className={`text-lg ${difficulty === 2 ? "text-yellow-400 font-bold" : "text-gray-400"}`}
                        onClick={() => selectDifficulty(2)}
                    >
                        intermediate
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <button
                        id="sixty"
                        className={`text-lg ${timer === 60 ? "text-yellow-400 font-bold" : "text-gray-400"}`}
                        onClick={() => selectTimeLimit(60)}
                    >
                        60s
                    </button>
                    <button
                        id="pro"
                        className={`text-lg ${difficulty === 3 ? "text-yellow-400 font-bold" : "text-gray-400"}`}
                        onClick={() => selectDifficulty(3)}
                    >
                        pro
                    </button>
                </div>
            </div>

            <div id="textDisplay" className="text-lg mb-8 text-center">
                {renderTestWords()}
            </div>

            <input
                id="textInput"
                className="w-full p-2 mb-6 text-black text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={inputValue}
                onChange={handleInputChange}
                disabled={!isTestActive && timeLeft === 0}
                autoFocus
            />

            {/* Replace Restart Button with GIF */}
            <div
                id="restartBtn"
                className="cursor-pointer"
                onClick={handleRestartClick}
            >
                <img
                    src={isGifActive ? restartGif : restartStatic}
                    alt="Restart"
                    className="w-14 h-14 hover:scale-110 transition-transform duration-200"
                />
            </div>

            <div className="text-center text-white">
                <div id="accuracy" className="text-xl mb-2">
                    Accuracy: {calculateAccuracy()}%
                </div>
                <div id="wpm" className="text-xl">
                    WPM: {wpm}
                </div>
            </div>
        </div>
    );
};

export default Content;
