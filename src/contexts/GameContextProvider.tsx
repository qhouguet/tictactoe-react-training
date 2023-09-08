import { createContext, PropsWithChildren } from 'react';
import { GameBoardModel } from '../model/game-board.model.ts';
import { CellValueEnum } from '../model/cell-value.enum.ts';

export type GameContextModel = {
	board: GameBoardModel;
};

const emptyGameBoard: GameBoardModel = [
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY],
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY],
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY]
];

export const GameContext = createContext<GameContextModel | undefined>(undefined);

export function GameContextProvider({ children }: PropsWithChildren) {
	const context: GameContextModel = {
		board: emptyGameBoard
	};

	return <GameContext.Provider value={context}>{children}</GameContext.Provider>;
}
