import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const reRoute = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginRegisteredUser = await loginUser({
      email: email,
      password: password,
    });
    console.log(loginRegisteredUser);
    setToken(loginRegisteredUser.data.token);
    setUser(loginRegisteredUser.data.user);
    reRoute("/");
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="Login">Login</h1>
      </div>
      <section className="AddPlayer">
        <form onSubmit={handleSubmit}>
          <label>
            Email:{" "}
            <input name="email" placeholder="Email" onChange={handleChange} />
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
