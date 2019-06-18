import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import ShotsActions from "../ducks/shots";

export function* getShots() {
  try {
    const response = yield call(api.get, `popular_shots`);

    yield put(ShotsActions.getShotsSuccess(response));
  } catch (err) {
    // TODO
    console.log(err);
  }
}
