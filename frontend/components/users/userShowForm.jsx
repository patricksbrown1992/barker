import { connect } from "react-redux";
import { logout} from "../../actions/sessionActions";
import {getBarks} from "../../actions/barkActions"
import {getUser} from "../../actions/userActions"
import { withRouter } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BarkShow = (props) => {
  const [localBarks, updateLocalBarks] = useState(() => {
    return []
  })
  useEffect(() => {
    props.getUser(parseInt(props.match.params.id)).then(() => props.getBarks(props.user)).then((barks) => updateLocalBarks(barks.barks))
    return () => {
    };
  }, []);

  const mappedBarks = localBarks.map(bark => {
    return <li key={bark.id}>
      <Link to={`/users/${bark.user_id}`}>{bark.username}</Link>
      <p>{bark.ruff}</p>
      <p>{bark.created_at.split("T")[0]}</p>
    </li>
  })

  return (
    <div className="user-show">

        <h1>Hi {props.user.username}!</h1>
        <p>This is the show page</p>
        <ul>
          {mappedBarks.length ? mappedBarks : "Empty"}
        </ul>
        <button onClick={() => props.logout()}>Log out</button>
    </div>
  );
}


const msp = (state) => ({
  errors: state.errors,
  user: state.entities.user[state.session.id],
  barks: state.entities.barks
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  getUser: id => dispatch(getUser(id)),
  getBarks: user => dispatch(getBarks(user)),

});

export default withRouter(connect(msp, mdp)(BarkShow));