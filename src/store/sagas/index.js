import { all, takeLatest } from "redux-saga/effects";

import { ShotsTypes } from "../ducks/shots";
import { getShots, getShot } from "./shots";

export default function* rootSaga() {
  return yield all([
    takeLatest(ShotsTypes.GET_SHOTS, getShots),
    takeLatest(ShotsTypes.GET_SHOT, getShot)
  ]);
}
