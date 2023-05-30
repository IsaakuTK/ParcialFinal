import { Actions, AppState, SomeActions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
    const { action, payload } = actions;

    switch (action){
        case SomeActions.SAVEFORM:
            state.forms = [...state.forms, payload];
            return state;

        case SomeActions.GETFORM:
            state.forms = payload;
            return state;


            case SomeActions.NAVIGATE:
                return {
                    ...state,
                    screen: payload,
                  };

            default:
            state;
    }

 
    return state;
  };