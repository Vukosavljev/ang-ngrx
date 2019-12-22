import { createSelector, createFeatureSelector } from "@ngrx/store";

import { AppState } from "./state";

export const featureState = createFeatureSelector<AppState>("isOpen");

export const selectSidenav = createSelector(
  featureState,
  (state: AppState) => state.isOpen
);
