import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = ({ setToken, setUser }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const reRoute = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3033/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, username, password, email }),
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
      setErrors(`Please fill out the form. ${error}`);
    }
  };

  const handleChange = (event) => {
    console.log(event.target);
    if (event.target.name === "fullname") {
      setFullname(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="Login">Register</h2>

        <section>
          {errors && <p className="register-error-msg">{errors}</p>}
          <form onSubmit={handleSubmit} className="form">
            <label className="FormInput">
              Full Name:{" "}
              <input
                value={fullname}
                name="fullname"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />
            </label>
            <label className="FormInput">
              Email:{" "}
              <input
                value={email}
                name="email"
                placeholder="email"
                onChange={handleChange}
                required
              />
            </label>
            <label className="FormInput">
              Username:{" "}
              <input
                value={username}
                name="username"
                placeholder="username"
                onChange={handleChange}
                required
              />
            </label>
            <label className="FormInput">
              Password:{" "}
              <input
                value={password}
                name="password"
                placeholder="password"
                onChange={handleChange}
                required
              />
            </label>
            <input type="submit" value="Register" />
          </form>
        </section>
      </div>
    </>
  );
};

export default Register;
