import { createContext, PropsWithChildren, useState } from 'react';
import { GameBoardModel } from '../model/game-board.model.ts';
import { CellValueEnum } from '../model/cell-value.enum.ts';
import { winningCondition } from '../model/winning-condition.ts';

export type GameContextModel = {
	board: GameBoardModel;
	updateBoard: (x: number, y: number, value: CellValueEnum) => void;
	player: CellValueEnum;
	updatePlayer: () => void;
	checkWinner: () => CellValueEnum | null;
	move: number;
	updateMove: () => void;
};

const emptyGameBoard: GameBoardModel = [
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY],
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY],
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY]
];

export const GameContext = createContext<GameContextModel | undefined>(undefined);

export function GameContextProvider({ children }: PropsWithChildren) {
	const [board, setBoard] = useState(emptyGameBoard);

	const updateBoard = (x: number, y: number, value: CellValueEnum) => {
		const _board = [...board] as GameBoardModel;
		_board[x][y] = value;
		setBoard(_board);
	};

	const [player, setPlayer] = useState(CellValueEnum.X);

	const updatePlayer = () => {
		player === CellValueEnum.X ? setPlayer(CellValueEnum.O) : setPlayer(CellValueEnum.X);
	};

	const checkWinner = () => {
		for (const condition of winningCondition) {
			const [firstCell, secondCell, thirdCell] = condition;

			const firstCellValue = board[firstCell[0]][firstCell[1]];
			const secondCellValue = board[secondCell[0]][secondCell[1]];
			const thirdCellValue = board[thirdCell[0]][thirdCell[1]];

			if (
				firstCellValue !== CellValueEnum.EMPTY &&
				firstCellValue === secondCellValue &&
				firstCellValue === thirdCellValue
			) {
				return player;
			} else if (move === 0) {
				return null;
			}
		}

		return null;
	};

	const [move, setMove] = useState(8); // demander à titouan

	const updateMove = () => {
		if (move > 0) {
			setMove(move - 1);
		}
	};

	const context: GameContextModel = {
		board,
		updateBoard,
		player,
		updatePlayer,
		checkWinner,
		move,
		updateMove
	};

	return <GameContext.Provider value={context}>{children}</GameContext.Provider>;
}
