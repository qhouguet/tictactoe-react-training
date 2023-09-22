import { GameBoardModel } from './game-board.model';
import { CellValueEnum } from './enum/cell-value.enum';

export const emptyGameBoard: GameBoardModel = [
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY],
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY],
	[CellValueEnum.EMPTY, CellValueEnum.EMPTY, CellValueEnum.EMPTY]
];
