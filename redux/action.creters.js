import getCurrentTime from "../utils/getCurrentTime.js";
// import { ADD_CURRENT_TIME, CLEAR_ALL_TIMES } from "./action.types.js";
import * as actionTypes from "./action.types.js";

export function addCurrentTime() {
  return {
    type: actionTypes.ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  };
}

export function clearTimes() {
  return {
    type: actionTypes.CLEAR_ALL_TIMES,
  };
}
