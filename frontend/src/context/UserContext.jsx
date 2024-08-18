// context/UserContext.js
import  { createContext, useState } from "react";
export const UserContext = createContext();

import PropTypes from "prop-types";

export const UserProvider = ({ children }) => {
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null); 

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};