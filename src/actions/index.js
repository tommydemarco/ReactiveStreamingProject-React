import axios from "axios";

export const signIn = () => {
  return { type: "SIGN_IN" };
};

export const signOut = () => {
  return { type: "SIGN_OUT" };
};

export const createStreamStart = () => {
  return {
    type: "CREATE_STREAM_START",
  };
};

export const createStreamSuccess = (payload) => {
  return {
    type: "CREATE_STREAM_SUCCESS",
    payload: payload,
  };
};

export const createStreamError = () => {
  return {
    type: "CREATE_STREAM_ERROR",
  };
};

export const createStreamAsync = (formData) => async (dispatch) => {
  dispatch(createStreamStart);
  try {
    const response = await axios.post(
      "http://localhost:3001/streams",
      formData
    );
    console.log(response);
    createStreamSuccess(response);
  } catch (e) {
    console.log(e);
    dispatch(createStreamError);
  }
};
