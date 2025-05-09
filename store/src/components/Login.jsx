import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const reRoute = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3033/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setUsername("");
        setPassword("");
        setToken(json.token);
        setUser(json.token);
        reRoute("/");
      } else {
        setErrors(`Oh no! Something went wrong! ${json.message}`);
      }
    } catch (error) {
      setErrors(`Everything is broken! ${error}`);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };
  return (
    <>
      <div className="container">
        <h2 className="Login">Login</h2>
      </div>
      <section className="AddPlayer">
        {errors && <p className="register-error-msg">{errors}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:{" "}
            <input
              name="username"
              placeholder="username"
              onChange={handleChange}
            />
          </label>
          <label>
            Password:{" "}
            <input
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>
      </section>
    </>
  );
};

export default Login;
