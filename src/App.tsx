import React from "react";
import "./App.css";
import AuthPage from "./components/AuthPage";

const App = () => {
  const [isSignup, setIsSignup] = React.useState(true);

  return (
    <div className="container">
      <div className="main-container">
        <AuthPage isSignup={isSignup} setIsSignup={setIsSignup} />
      </div>
    </div>
  );
};

export default App;
