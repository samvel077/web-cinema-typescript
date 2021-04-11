import { AllTypes } from './constantes';
import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { reducer } from "./reducer";

export type AppState = ReturnType<typeof reducer>

export const store = createStore(reducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AllTypes>));
