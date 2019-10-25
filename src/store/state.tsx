import React, {createContext, useContext, useReducer, ReactNode, Dispatch} from 'react';

// == App states

export enum headerStates {
	Wide,
	Tall,
	Minimized,
	Mobile,
	Fullscreen
}

export type State = {
	headerState: headerStates
}

export const initialState : State = {
	headerState: headerStates.Wide
}

// == Reducer

export const reducer = (state: any, action: any) => {
	switch (action.type) {
		case 'changeHeaderState':
			return {
				...state,
				headerState: action.newHeaderState
			};
		default:
			return state;
	}
};


// === Provider

export const StateContext = createContext<[State, Dispatch<any>]>([initialState, () => null]); // context will output a reducer (see below)

interface StateProviderProps {
	reducer: (state: State, action: string) => State
	initialState: State
	children: ReactNode
}

export const StateProvider = (props: StateProviderProps) =>(
  <StateContext.Provider value={useReducer(props.reducer, props.initialState)}>
    {props.children}
  </StateContext.Provider>
);

export const useGlobalStateValue = () => useContext(StateContext);