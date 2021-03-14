import * as APIUtil from "../util/userUtil";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => {
    return {
      type: RECEIVE_USER,
      user,
    };
};

export const getUser = (id) => (dispatch) =>
  APIUtil.getBarksForUser(id).then((user) => dispatch(receiveUser(user)));