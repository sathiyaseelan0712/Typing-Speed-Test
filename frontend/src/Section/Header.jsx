import React from 'react';

function Header() {
  const isHome = true; // Assume this is the home page

  return (
    <header className="flex justify-between items-center p-4 bg-transparent text-white">
      <div className="flex items-center">
        <img src="../images/logo.png" alt="Logo" className="h-10 w-10" />
        <h1 className="ml-3 text-xl font-bold">TypingRacer</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li className={isHome ? 'text-blue-500' : 'text-white'}>Home</li>
        </ul>
      </nav>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-transparent border border-white rounded">Sign in</button>
        <button className="px-4 py-2 bg-white text-black rounded">Join TypeRacer</button>
      </div>
    </header>
  );
}

export default Header;
