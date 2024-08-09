import React from 'react';
import Bg from '../images/bg.jpg';
import Logo from '../images/logo.png';

const Background = ({ children }) => (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${Bg})` }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="absolute top-0 left-0 p-4 flex items-center">
            <img 
                src={Logo} 
                alt="TypingRacer Logo" 
                className="h-12 p-2 transform transition-transform duration-300 ease-in-out hover:scale-150" 
            />
            <h1 className="text-white text-2xl font-bold ml-2 font-allerta">TYPERACER</h1>
        </div>

        <div className="absolute top-0 right-0 p-4 flex items-center">
            <button className="mr-2 p-2 border rounded bg-blue-500 text-white hover:bg-blue-700 transition">Sign In</button>
            <button className="p-2 border rounded bg-green-500 text-white hover:bg-green-700 transition">Sign Up</button>
        </div>

        <div className="relative z-10 flex-grow flex justify-center items-center">
            {children}
        </div>
    </div>
);

export default Background;
