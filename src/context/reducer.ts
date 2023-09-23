import { winningConditionCoordinates } from '../model/winning-condition-coordinates';
import { CellValueEnum } from '../model/enum/cell-value.enum';
import { ActionType, StateType } from './types';
import { GameBoardModel } from '../model/game-board.model';
import { getRandomElementFromArray } from './getRandomElementFromArray';

export function reducer(state: StateType, action: ActionType) {
	const { type } = action;

	switch (type) {
		case 'UPDATE_BOARD':
			if (state.board[action.x][action.y] === CellValueEnum.EMPTY) {
				const updatedBoard: GameBoardModel = [...state.board];
				updatedBoard[action.x][action.y] = action.value;

				if (state.playerNumber === 2) {
					const xCoordinate = action.x;
					const yCoordinate = action.y;

					const updatedGridCoordinates = state.gridCoordinates.filter(
						([x, y]) => x !== xCoordinate || y !== yCoordinate
					);
					state.gridCoordinates = updatedGridCoordinates;
				}

				if (state.movesLeft > 0) {
					state.movesLeft -= 1;
				}

				return {
					...state,
					board: updatedBoard
				};
			}
			return state;
		case 'UPDATE_BOARD_2P': {
			const [xCom, yCom] = state.computerMove;
			// console.log(state.computerMove);

			const updatedBoard: GameBoardModel = [...state.board];
			updatedBoard[xCom][yCom] = CellValueEnum.O;

			const updatedGridCoordinates = state.gridCoordinates.filter(
				([x, y]) => x !== xCom || y !== yCom
			);

			return { ...state, board: updatedBoard, gridCoordinates: updatedGridCoordinates };
		}
		case 'UPDATE_PLAYER':
			return {
				...state,
				player: state.player === CellValueEnum.X ? CellValueEnum.O : CellValueEnum.X
			};
		case 'CHECK_ENDGAME':
			for (const condition of winningConditionCoordinates) {
				const [firstCell, secondCell, thirdCell] = condition;
				const [x1, y1] = firstCell;
				const [x2, y2] = secondCell;
				const [x3, y3] = thirdCell;

				const [cell1, cell2, cell3] = [
					state.board[x1][y1],
					state.board[x2][y2],
					state.board[x3][y3]
				];

				if (cell1 !== CellValueEnum.EMPTY && cell1 === cell2 && cell1 === cell3) {
					return {
						...state,
						isGameWon: true,
						endMessage: `${state.player} has won`
					};
				}
			}

			if (state.movesLeft <= 0) {
				return {
					...state,
					isGameWon: true,
					endMessage: "It's a tie"
				};
			}

			return state;
		case 'UPDATE_PLAYER_NUMBER':
			return { ...state, playerNumber: action.number };
		case 'COMPUTER_PLAYING': {
			const updatedComputerMove = getRandomElementFromArray(state.gridCoordinates);
			return {
				...state,
				computerMove: updatedComputerMove
			};
		}
		default:
			return state;
	}
}
