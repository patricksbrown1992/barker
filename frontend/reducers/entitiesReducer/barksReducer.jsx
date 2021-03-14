import {
    RECEIVE_BARKS,
    RECEIVE_BARK,
    DESTROY_BARK,
    CLEAR_BARKS,
  } from "../../actions/barkActions";
  import { REMOVE_USER } from "../../actions/sessionActions";
  import { merge } from "lodash";
  
  const barksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_BARKS:
        const barks = {};
        action.barks.forEach((bark) => {
          barks[bark.id] = bark;
        });
  
        return merge({}, state, barks);
      case RECEIVE_BARK:
        return merge({}, state, { [action.bark.video_id]: action.bark });
      case CLEAR_BARKS:
        return {};
      case DESTROY_BARK:
        const newState = merge({}, state);
        delete newState[action.bark.video_id];
        return newState;
      case REMOVE_USER:
        return {};
      default:
        return state;
    }
  };
  export default barksReducer;
  