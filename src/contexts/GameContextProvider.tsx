import { createContext, PropsWithChildren, useState } from 'react';
import { GameBoardModel } from '../model/game-board.model.ts';
import { CellValueEnum } from '../model/cell-value.enum.ts';
import { winningConditionCoordinates } from '../model/winning-condition-coordinates.ts';

export type GameContextModel = {
	board: GameBoardModel;
	updateBoard: (x: number, y: number, value: CellValueEnum) => void;
	player: CellValueEnum;
	updatePlayer: () => void;
	checkWinner: () => CellValueEnum | null;
	isGameWon: boolean;
	checkEndGame: (value: CellValueEnum | null) => void;
	endMessage: string;
};

const emptyGameBoard: GameBoardModel = [
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY],
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY],
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY]
];

export const GameContext = createContext<GameContextModel | undefined>(undefined);

export function GameContextProvider({ children }: PropsWithChildren) {
	const [board, setBoard] = useState(emptyGameBoard);
	const [player, setPlayer] = useState(CellValueEnum.X);
	const [isGameWon, setIsGameWon] = useState(false);
	const [endMessage, setEndMessage] = useState('');
	const [movesLeft, setMovesLeft] = useState(8);

	const updateMovesLeft = () => {
		if (movesLeft > 0) {
			setMovesLeft(movesLeft - 1);
		}
	};

	const endGame = () => {
		setIsGameWon((curr) => !curr);
	};

	const checkEndGame = (value: CellValueEnum | null) => {
		if (value !== null) {
			endGame();
			writeEndMessage(value + ' have won');
		} else if (movesLeft <= 0) {
			endGame();
			writeEndMessage("It's a tie");
		}
	};

	const writeEndMessage = (message: string) => {
		setEndMessage(message);
	};

	const updateBoard = (x: number, y: number, value: CellValueEnum) => {
		if (board[x][y] === CellValueEnum.EMPTY) {
			const _board = [...board] as GameBoardModel;
			_board[x][y] = value;
			setBoard(_board);
			updateMovesLeft();
		}
	};

	const updatePlayer = () => {
		setPlayer(player === CellValueEnum.X ? CellValueEnum.O : CellValueEnum.X);
	};

	const checkWinner = () => {
		for (const condition of winningConditionCoordinates) {
			const [firstCell, secondCell, thirdCell] = condition;

			const [x1, y1] = firstCell;
			const [x2, y2] = secondCell;
			const [x3, y3] = thirdCell;

			const firstCellValue = board[x1][y1];
			const secondCellValue = board[x2][y2];
			const thirdCellValue = board[x3][y3];

			if (
				firstCellValue !== CellValueEnum.EMPTY &&
				firstCellValue === secondCellValue &&
				firstCellValue === thirdCellValue
			) {
				return player;
			} else if (movesLeft === 0) {
				return null;
			}
		}

		return null;
	};

	const context: GameContextModel = {
		board,
		updateBoard,
		player,
		updatePlayer,
		checkWinner,
		isGameWon,
		checkEndGame,
		endMessage
	};

	return <GameContext.Provider value={context}>{children}</GameContext.Provider>;
}
