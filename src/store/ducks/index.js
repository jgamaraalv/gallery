import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as shots } from "./shots";

export default history =>
  combineReducers({
    shots,
    router: connectRouter(history)
  });
