import { PropsWithChildren, createContext, useReducer } from 'react';
import { CellValueEnum } from '../model/enum/cell-value.enum';
import { emptyGameBoard } from '../model/empty-game-board';
import { ActionType, StateType } from './types';
import { reducer } from './reducer';

export const GameContextReducer = createContext<
	{ state: StateType; dispatch: React.Dispatch<ActionType> } | undefined
>(undefined);

export function GameContextReducerProvider({ children }: PropsWithChildren) {
	const initState: StateType = {
		board: emptyGameBoard,
		player: CellValueEnum.X,
		isGameWon: false,
		endMessage: '',
		movesLeft: 9
	};
	const [state, dispatch] = useReducer(reducer, initState);
	return (
		<GameContextReducer.Provider value={{ state, dispatch }}>
			{children}
		</GameContextReducer.Provider>
	);
}
