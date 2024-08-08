// Content.jsx
import React from 'react';

const Content = ({ 
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
    wpm 
}) => {
    const renderTestWords = () => {
        return testWords.map((word, index) => (
            <span key={index} className={`word ${index === currentWordIndex ? "current" : ""}`}>
                {word}{" "}
            </span>
        ));
    };

    return (
        <div className="relative z-10 text-center text-white">
            <div className="flex justify-center items-center mb-4">
                <div id="timeName" className="mr-2">Time:</div>
                <div id="time" className="mr-4">{isTestActive ? timeLeft : timer}</div>
                <div id="cwName" className="mr-2">CW:</div>
                <div id="cw">{wordsCorrect}</div>
            </div>

            <div id="textDisplay" className="text-lg mb-6">
                {renderTestWords()}
            </div>

            <input
                id="textInput"
                className="w-full p-2 border rounded mb-4 text-black"
                value={inputValue}
                onChange={handleInputChange}
                disabled={!isTestActive && timeLeft === 0}
                autoFocus
            />

            <div className="flex justify-between mb-6">
                <button
                    id="thirty"
                    className={`p-2 border rounded ${timer === 30 ? "bg-yellow-500" : ""}`}
                    onClick={() => selectTimeLimit(30)}
                >
                    30 Seconds
                </button>
                <button
                    id="sixty"
                    className={`p-2 border rounded ${timer === 60 ? "bg-yellow-500" : ""}`}
                    onClick={() => selectTimeLimit(60)}
                >
                    60 Seconds
                </button>
                <button
                    id="beg"
                    className={`p-2 border rounded ${difficulty === 1 ? "bg-yellow-500" : ""}`}
                    onClick={() => selectDifficulty(1)}
                >
                    Beginner
                </button>
                <button
                    id="pro"
                    className={`p-2 border rounded ${difficulty === 2 ? "bg-yellow-500" : ""}`}
                    onClick={() => selectDifficulty(2)}
                >
                    Pro
                </button>
            </div>

            <button
                id="restartBtn"
                className="w-full p-2 border rounded bg-red-500 text-white"
                onClick={resetTest}
            >
                Restart Test
            </button>

            {!isTestActive && timeLeft === 0 && (
                <div className="text-center mt-6">
                    <div>Accuracy: {calculateAccuracy()}%</div>
                    <div>Words Per Minute (WPM): {wpm}</div>
                </div>
            )}
        </div>
    );
};

export default Content;
