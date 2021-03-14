import { connect } from "react-redux";
import { logout} from "../../actions/sessionActions";
import {get10Barks} from "../../actions/barkActions"

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BarkIndex = ({ logout, user, errors, get10Barks, barks }) => {
  useEffect(() => {
    get10Barks()
    return () => {
    };
  }, []);

  const barksMapped = Object.values(barks).map(bark => {
    debugger
    return <li key={bark.id}>
      <p>{bark.username}</p>
      <p>{bark.ruff}</p>
      <p>{bark.created_at.split("T")[0]}</p>
    </li>
  })
  return (
    <div className="bark-index">

        <h1>Hi {user.username}!</h1>
        <ul>
          {barksMapped.length ? barksMapped : "Empty"}
        </ul>
        <button onClick={() => logout()}>Log out</button>
    </div>
  );
};


const msp = (state) => ({
  errors: state.errors,
  user: state.entities.user[state.session.id],
  barks: state.entities.barks
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  get10Barks: () => dispatch(get10Barks())
});

export default connect(msp, mdp)(BarkIndex);