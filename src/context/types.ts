import { GameBoardModel } from '../model/game-board.model';
import { CellValueEnum } from '../model/enum/cell-value.enum';
import { ActionEnum } from '../model/enum/action.enum';

export type StateType = {
	board: GameBoardModel;
	player: CellValueEnum;
	isGameWon: boolean;
	endMessage: string;
	movesLeft: number;
};

export type ActionType =
	| { type: ActionEnum.UPDATE_BOARD; x: number; y: number; value: CellValueEnum }
	| { type: ActionEnum.UPDATE_PLAYER }
	| { type: ActionEnum.CHECK_ENDGAME };
