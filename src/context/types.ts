import { GameBoardModel } from '../model/game-board.model';
import { CellValueEnum } from '../model/enum/cell-value.enum';
import { ActionEnum } from '../model/enum/action.enum';
import { Coordinate } from '../model/grid-coordinates';

export type StateType = {
	board: GameBoardModel;
	player: CellValueEnum;
	isGameWon: boolean;
	endMessage: string;
	movesLeft: number;
	playerNumber: number;
	gridCoordinates: Coordinate[];
	computerMove: [number, number];
};

export type ActionType =
	| { type: ActionEnum.UPDATE_BOARD; x: number; y: number; value: CellValueEnum }
	| { type: ActionEnum.UPDATE_BOARD_1P }
	| { type: ActionEnum.UPDATE_PLAYER }
	| { type: ActionEnum.CHECK_ENDGAME }
	| { type: ActionEnum.UPDATE_PLAYER_NUMBER; number: number }
	| { type: ActionEnum.COMPUTER_PLAYING }
	| { type: ActionEnum.RESET };
