import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getShots: [],
  getShotsSuccess: ["shots"]
});

export const ShotsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  shots: [],
  loading: false
});

/* Reducers */

export const getShots = state => state.merge({ loading: true });

export const getShotsSuccess = (state, { shots }) => state.merge({ shots });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SHOTS]: getShots,
  [Types.GET_SHOTS_SUCCESS]: getShotsSuccess
});