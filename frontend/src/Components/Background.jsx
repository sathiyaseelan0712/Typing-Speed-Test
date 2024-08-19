import { Link, useLocation } from "react-router-dom";
import Bg from "../images/bg.jpg";
import Logo from "../images/logo.png";
import { UserContext } from '../context/UserContext';  // Import UserContext correctly
import { useContext } from "react";
// eslint-disable-next-line react/prop-types
const BackGround = ({ children }) => {
  const location = useLocation();
  const { userName,setUserName } = useContext(UserContext); 

  const renderButtons = () => {
    switch (location.pathname) {
      case "/dashboard":
        return (
          <>
            <Link
              to="/signin"
              className="text-white mr-4 font-mono font-bold transition-colors duration-300 hover:text-yellow-500"
            >
              SignIn
            </Link>
            <Link
              to="/signup"
              className="bg-white text-black px-4 py-2 rounded-full font-mono font-bold"
            >
              JoinTypeRacer
            </Link>
          </>
        );
      case "/signin":
      case "/signup":
      case "/forgotpassword":
        return (
          <Link
            to="/dashboard"
            className="bg-white text-black px-4 py-2 rounded-full font-mono font-bold"
          >
            Dashboard
          </Link>
        );
      case "/home":
        return (
          <div className="user-info">
            <span className="text-white mr-4 text-lg font-mono font-bold">{userName}</span>
            <Link
              className="bg-white text-black px-4 py-2 rounded-full font-mono font-bold"
              to="/dashboard"
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

      <div className="absolute top-0 left-0 p-4 flex items-center">
        <img
          src={Logo}
          alt="TypingRacer Logo"
          className="h-12 p-2 transform transition-transform duration-300 ease-in-out hover:scale-150"
        />
        <h1 className="text-white text-2xl font-bold ml-2 font-mono">
          TypeRacer
        </h1>
      </div>

      <div className="absolute top-0 right-0 p-4 flex items-center">
        {renderButtons()}
      </div>

      <div className="relative z-10 flex-grow flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default BackGround;
