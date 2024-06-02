import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let [error, setError] = useState(false);
  let [submitted, isSubmitted] = useState(false);

  const usernamechange = (event) => {
    setUsername(event.target.value);
    setError(false);
    isSubmitted(false);
  };
  const passwordchange = (event) => {
    setPassword(event.target.value);
    setError(false);
    isSubmitted(false);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(username);
    // console.log(password);

    if (username === "user" && password === "password") {
      isSubmitted(true);
      setError(false);
    } else {
      setError(true);
      isSubmitted(false);
    }
  };
  return (
    <div>
      <h1>Login Page</h1>

      {submitted ? (
        <span>Welcome, user!</span>
      ) : (
        <form onSubmit={handlesubmit}>
          {error && <p>Invalid username or password</p>}

          <label>Username:</label>
          <input
            type="text"
            name=""
            id=""
            onChange={usernamechange}
            placeholder="username"
            required
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={passwordchange}
            placeholder="password"
            required
          />
          <button type="submit">submit</button>
        </form>
      )}
    </div>
  );
}
