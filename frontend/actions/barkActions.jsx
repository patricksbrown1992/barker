import * as APIUtil from "../util/barkUtil";

export const RECEIVE_BARK = "RECEIVE_BARK";
export const RECEIVE_BARKS = "RECEIVE_BARKS";
export const DESTROY_BARK = "DESTROY_BARK";
export const CLEAR_BARKS = "CLEAR_BARKS";

const receiveBark = (bark) => {
  return {
    type: RECEIVE_BARK,
    bark,
  };
};

const destroyBark = (bark) => {
  return {
    type: DESTROY_BARK,
    bark,
  };
};

const receiveBarks = (barks) => {
  return {
    type: RECEIVE_BARKS,
    barks,
  };
};

export const clearBarks = () => {
  return {
    type: CLEAR_BARKS,
  };
};

export const getBarks = (user) => (dispatch) =>
  APIUtil.getBarks(user).then((barks) => dispatch(receiveBarks(barks)));

  export const get10Barks = () => (dispatch) => (
  APIUtil.get10Barks().then((barks) => dispatch(receiveBarks(barks)))
  );

export const getBark = (id) => (dispatch) =>
  APIUtil.getBark(id).then((bark) => dispatch(receiveBark(bark)));

export const createBark = (bark) => (dispatch) => {
  return APIUtil.createBark(bark).then((bark) => dispatch(receiveBark(bark)));
};

export const updateBark = (bark) => (dispatch) =>
  APIUtil.updateBark(bark).then((bark) => dispatch(receiveBark(bark)));

export const deleteBark = (bark) => (dispatch) => {
  return APIUtil.deleteBark(bark).then((bark) => dispatch(destroyBark(bark)));
};
