import React, { useState } from "react";

const Signup = () => {
  const [signUp, setSignUp] = useState("");
  const handleChange = e => {
    setSignUp(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleChange();
  };

  return (
    <div className="form-container">
      <h1>Let's Talk</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">What is your email?</label>
        <input
          type="email"
          name="username"
          onChange={handleChange}
          className="input"
        />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
