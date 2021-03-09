import { connect } from "react-redux";
import { logout} from "../../actions/sessionActions";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const BarkIndex = ({ logout }) => {


  return (
    <div className="sign-in-form">
        <h1>Bark index</h1>
        <button onClick={() => logout()}>Log out</button>
    </div>
  );
};


const msp = (state) => ({
  errors: state.errors,
});

const mdp = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(BarkIndex);