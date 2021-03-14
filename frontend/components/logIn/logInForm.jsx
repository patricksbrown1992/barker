import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/sessionActions";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogInForm = ({ login, clearErrors, errors }) => {
  const [email, updateEmail] = useState(() => {
    return "";
  });

  const [password, updatePassword] = useState(() => {
    return "";
  });

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, password });
    updatePassword("");
    updateEmail("");
    clearErrors();
  }

  return (
    <div className="sign-in-form">
      <div className="sign-in-title">
        <Link to="/">
          {/* <img src={window.big} /> */}
        </Link>
      </div>
      <div className="sign-in-body">
        <h1>Sign In</h1>
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => updateEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => updatePassword(e.target.value)}
        />
        <ul>
          <br />
          {errors
            ? errors.map((error, idx) => {
                return <li key={idx}>{error}</li>;
              })
            : ""}
          <br />
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="sign-in-continue">
            <button type="submit">Sign In</button>
          </div>
        </form>

        <br />
        <div className="redirect-to-sign-up">
          <h3>New to PatrickFlix?</h3>
          <Link to="/signup"> Sign up now.</Link>
        </div>
      </div>
    </div>
  );
};


const msp = (state) => ({
  errors: state.errors,
});

const mdp = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(LogInForm);
