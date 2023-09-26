import { CellValueEnum } from '../model/enum/cell-value.enum';
import { emptyGameBoard } from '../model/empty-game-board';
import { gridCoordinates } from '../model/grid-coordinates';
import { StateType } from './types';

export const initState: StateType = {
	board: emptyGameBoard,
	player: CellValueEnum.X,
	isGameWon: false,
	endMessage: '',
	movesLeft: 9,
	playerNumber: 0,
	gridCoordinates: gridCoordinates,
	computerMove: [0, 0],
	xWin: 0,
	oWin: 0
};
