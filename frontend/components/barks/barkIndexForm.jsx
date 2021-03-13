import { connect } from "react-redux";
import { logout} from "../../actions/sessionActions";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const BarkIndex = ({ logout, user, errors }) => {

  return (
    <div className="sign-in-form">

        <h1>Hi {user.username}!</h1>
        
        <button onClick={() => logout()}>Log out</button>
    </div>
  );
};


const msp = (state) => ({
  errors: state.errors,
  user: state.entities.user[state.session.id]
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(BarkIndex);