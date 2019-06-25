import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import ShotsActions from "../ducks/shots";

export function* getShots() {
  try {
    const response = yield call(api.get, `user/shots`);

    yield put(ShotsActions.getShotsSuccess(response.data));
  } catch (err) {
    // TODO
    console.log(err);
  }
}

export function* getShot({ id }) {
  try {
    const response = yield call(api.get, `shots/${id}`);

    yield put(ShotsActions.getShotSuccess(response.data));
  } catch (err) {
    // TODO
    console.log(err);
  }
}
