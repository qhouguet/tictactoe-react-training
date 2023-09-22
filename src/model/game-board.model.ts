import { CellValueEnum } from './enum/cell-value.enum.ts';

export type GameBoardModel = [
	[CellValueEnum, CellValueEnum, CellValueEnum],
	[CellValueEnum, CellValueEnum, CellValueEnum],
	[CellValueEnum, CellValueEnum, CellValueEnum]
];
