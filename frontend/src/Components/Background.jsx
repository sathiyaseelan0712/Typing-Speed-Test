import { Link, useLocation } from "react-router-dom";
import Bg from "../images/bg.jpg";
import Logo from "../images/logo.png";
import { UserContext } from '../context/UserContext';  
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const BackGround = ({ children }) => {
  const location = useLocation();
  const { userName, setUserName } = useContext(UserContext); 

  const renderButtons = () => {
    switch (location.pathname) {
      case "/":
        return (
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Link
              to="/signup"
              className="bg-white text-black px-4 py-2 rounded-full font-mono font-bold w-full sm:w-auto text-center"
            >
              JoinTypeRacer
            </Link>
            <Link
              to="/signin"
              className="text-white font-mono font-bold transition-colors duration-300 hover:text-yellow-500 w-full sm:w-auto text-center"
            >
              SignIn
            </Link>
          </div>
        );
      case "/signin":
      case "/signup":
      case "/forgotpassword":
        return (
          <Link
            to="/"
            className="bg-white text-black px-4 py-2 rounded-full font-mono font-bold w-full sm:w-auto text-center"
          >
            Dashboard
          </Link>
        );
      case "/home":
        return (
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-white text-lg font-mono font-bold">{userName}</span>
            <Link
              className="bg-white text-black px-4 py-2 rounded-full font-mono font-bold w-full sm:w-auto text-center"
              to="/"
              onClick={() => setUserName("")}
            >
              Logout
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center w-full z-10">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="TypingRacer Logo"
            className="h-10 w-10 p-2 transform transition-transform duration-300 ease-in-out hover:scale-150"
          />
          <h1 className="text-white text-2xl font-bold ml-2 font-mono">
            TypeRacer
          </h1>
        </div>
        <div className="flex justify-end items-center">
          {renderButtons()}
        </div>
      </header>

      <main className="absolute top-10vh left-0 right-0 w-full flex justify-center items-center p-4 z-0">
        {children}
      </main>
    </div>
  );
};

export default BackGround;
