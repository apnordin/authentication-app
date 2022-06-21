import React from "react";
// import "../App.css";

interface AuthPageProps {
  isSignup: boolean;
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthPage: React.FC<AuthPageProps> = ({isSignup, setIsSignup}) => {
  const SwapButton = () => {
    return (
      <div className="swap-container">
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <button onClick={() => setIsSignup(!isSignup)} className="swap-button">
          {isSignup ? "Log In" : "Sign Up"}
        </button>
      </div>
    );
  };

  const SignupPage = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleSubmit = (e: {preventDefault: () => void}) => {
      e.preventDefault();
      console.log(firstName, lastName, email, password);
    };

    return (
      <>
        <h1>Create your account</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="sign-up">Sign up</button>
        </form>
      </>
    );
  };

  const LoginPage = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleSubmit = (e: {preventDefault: () => void}) => {
      e.preventDefault();
      console.log(email, password);
    };

    return (
      <>
        <h1>Log in to your account</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="sign-up">Log in</button>
        </form>
      </>
    );
  };

  return (
    <div className="auth-container">
      {isSignup ? <SignupPage /> : <LoginPage />} <SwapButton />
    </div>
  );
};

export default AuthPage;
