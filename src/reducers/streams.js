import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/types";

const INITIAL_STATE = {
  streams: {},
};

const streamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case FETCH_STREAMS:
      const newStreams = action.payload.reduce((accumulator, stream) => {
        return { ...accumulator, [stream.id]: stream };
      }, {});
      return { ...state, ...newStreams };
    default:
      return state;
  }
};

export default streamsReducer;
