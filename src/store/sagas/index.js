import { all, takeLatest } from "redux-saga/effects";

import { ShotsTypes } from "../ducks/shots";
import { getShots } from "./shots";

export default function* rootSaga() {
  return yield all([takeLatest(ShotsTypes.GET_SHOTS, getShots)]);
}
