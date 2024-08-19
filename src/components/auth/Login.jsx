import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import logo from "/GoogleLogo3.png";
import { useForm } from "../../hooks/useForm";
import { startGoogleLogin, startLoginEmailPassword } from "../../action/auth";

export const Login = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div className="body">
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button
          disabled={loading}
          className="btn btn-primary btn-block"
          type="submit"
        >
          Login
        </button>

        <div className="auth__social-network">
          <p>Login With Social Networks</p>
          <div onClick={handleGoogleLogin} className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src={logo} alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/signup">
          Create New Account
        </Link>
      </form>
    </div>
  );
};
