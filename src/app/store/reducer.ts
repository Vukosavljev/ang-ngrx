import { createReducer, on } from "@ngrx/store";
import { toggleSidenav } from "./action";

import { initialState } from "./state";

export const reducer = createReducer(
  initialState,
  on(toggleSidenav, state => ({
    ...state,
    isOpen: !state.isOpen
  }))
);

export function sidenavReducer(state, action) {
  return reducer(state, action);
}
