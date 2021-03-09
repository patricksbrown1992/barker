import React from "react";
import { Link } from "react-router-dom";
import { login, clearErrors } from "../../actions/sessionActions";
import { connect } from "react-redux";

const mdp = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

const SplashForm = (props) => {
  function loginPerson(e) {
    e.preventDefault();
    const email = "admin@admin.com";
    const password = "123456";
    const person = { email, password };
    props.login(person);
    props.clearErrors();
  }

  return (
    <div className="splash-form">
      <div className="splash-header">
        <div className="links-div">
          <ul>
            <a
              href="https://patricksbrown1992.github.io/portfolio/"
              target="_blank"
            >
              Portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/patricksbrown1992/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/patricksbrown1992" target="_blank">
              Github
            </a>
          </ul>
        </div>
        <img src={window.big} />
        <div className="splash-head-right">
          <h3>Have an account?</h3>
          <nav>
            <Link to="/login">Sign In</Link>
          </nav>
        </div>
      </div>
      <div className="splash-body">
        <h1>See what's next.</h1>
        <h3>WATCH ANYWHERE. CANCEL ANYTIME.</h3>
        <nav>
          <Link to="/signup">Sign Up</Link>
        </nav>
        <button onClick={loginPerson}>Demo Login</button>
      </div>
    </div>
  );
};

export default connect(null, mdp)(SplashForm);
