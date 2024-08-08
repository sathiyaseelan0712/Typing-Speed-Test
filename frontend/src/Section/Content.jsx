import React, { useState, useEffect } from 'react';

function Content() {
  const [timer, setTimer] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [typedText, setTypedText] = useState('');

  const sampleText = "Your journey to typing mastery begins here.";

  useEffect(() => {
    let interval;
    if (typedText.length > 0 && typedText.length < sampleText.length) {
      interval = setInterval(() => {
        setTimer(prevTime => prevTime + 1);
        const wordsTyped = typedText.split(' ').length;
        const charsTyped = typedText.length;
        setWpm(Math.floor((wordsTyped / timer) * 60));
        setCpm(Math.floor((charsTyped / timer) * 60));
        const correctChars = sampleText.split('').filter((char, i) => char === typedText[i]).length;
        setAccuracy((correctChars / charsTyped) * 100);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [typedText, timer]);

  const handleChange = (e) => {
    setTypedText(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-white mb-6">Test your typing skills</h2>
      <div className="flex space-x-4 mb-6">
        <div className="flex flex-col items-center">
          <div className="bg-purple-500 text-white rounded-full w-20 h-20 flex items-center justify-center">
            {timer} Seconds
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white text-black rounded-full w-20 h-20 flex items-center justify-center">
            {wpm} WPM
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white text-black rounded-full w-20 h-20 flex items-center justify-center">
            {cpm} CPM
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white text-black rounded-full w-20 h-20 flex items-center justify-center">
            {accuracy.toFixed(2)}%
          </div>
        </div>
      </div>
      <textarea
        value={typedText}
        onChange={handleChange}
        className="w-full p-4 text-xl border-2 border-gray-300 rounded"
        rows="3"
        placeholder={sampleText}
      />
    </div>
  );
}

export default Content;
