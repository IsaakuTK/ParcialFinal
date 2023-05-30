import { Formi } from "./Formi";

export type Observer = { render: () => void } & HTMLElement;


export enum Screens {
  DASHBOARD = "DASHBOARD",
  INFO = "INFO",
}

export type AppState = {
  forms: Formi[],
  screen: Screens,
};

export enum SomeActions {
  "SAVEFORM" = "SAVEFORM",
  "GETFORM" = "GETFORM",
  "NAVIGATE" = "NAVIGATE",
}

export interface SaveForm {
  action: SomeActions.SAVEFORM;
  payload: Formi;
}

export interface GetForm {
  action: SomeActions.GETFORM;
  payload: Formi[];
}

export interface Navigate {
  action: SomeActions.NAVIGATE;
  payload: Screens;
}

export type Actions = SaveForm | GetForm | Navigate;