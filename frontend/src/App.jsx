import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackgroundWithHeader from "./Components/Background"; // Import BackgroundWithHeader
import HomePage from "./Components/HomePage";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Dashboard";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <BackgroundWithHeader>
              <HomePage />
            </BackgroundWithHeader>
          }
        />
        <Route
          path="/signin"
          element={
            <BackgroundWithHeader>
              <SignIn />
            </BackgroundWithHeader>
          }
        />
        <Route
          path="/signup"
          element={
            <BackgroundWithHeader>
              <SignIn />
            </BackgroundWithHeader>
          }
        />
        <Route
          path="/dashboard"
          element={
            <BackgroundWithHeader>
              <Dashboard />
            </BackgroundWithHeader>
          }
        />
       
        <Route
          path="/logout"
          element={
            <BackgroundWithHeader>
              <HomePage />
            </BackgroundWithHeader>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
