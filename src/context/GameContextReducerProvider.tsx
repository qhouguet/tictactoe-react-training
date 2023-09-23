import { PropsWithChildren, createContext, useReducer } from 'react';
import { initState } from './init-state';
import { ActionType, StateType } from './types';
import { reducer } from './reducer';

export const GameContextReducer = createContext<
	{ state: StateType; dispatch: React.Dispatch<ActionType> } | undefined
>(undefined);

export function GameContextReducerProvider({ children }: PropsWithChildren) {
	const [state, dispatch] = useReducer(reducer, initState);
	return (
		<GameContextReducer.Provider value={{ state, dispatch }}>
			{children}
		</GameContextReducer.Provider>
	);
}
