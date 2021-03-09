import * as APIUtil from "../util/sessionAPIUtil";

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user).then(
    (user) => dispatch(receiveUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const login = (user) => (dispatch) =>
  APIUtil.login(user).then(
    (user) => dispatch(receiveUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  APIUtil.logout().then(() => dispatch(removeUser()));
