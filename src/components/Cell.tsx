import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { ActionEnum } from '../model/enum/action.enum';
import { CellValueEnum } from '../model/enum/cell-value.enum';
// import { useEffect } from 'react';

type Props = {
	x: number;
	y: number;
};

export function Cell({ x, y }: Props) {
	const { state, dispatch } = useGameContextReducer();

	const handleClick = () => {
		dispatch({ type: ActionEnum.PLAYER_UPDATE_BOARD, x: x, y: y, value: state.player });
		dispatch({ type: ActionEnum.CHECK_ENDGAME });
		dispatch({ type: ActionEnum.CHANGE_PLAYER });
		if (state.playerNumber === 1) {
			setTimeout(() => {
				dispatch({ type: ActionEnum.COMPUTER_UPDATE_BOARD });
				dispatch({ type: ActionEnum.CHECK_ENDGAME });
				dispatch({ type: ActionEnum.CHANGE_PLAYER });
			}, 300);
		}
		dispatch({ type: ActionEnum.UPDATE_SCORE });
	};

	const cellValue = state.board[x][y];

	return (
		<td
			className={`${state.isGameWon ? 'endgame' : ''} ${
				state.player === CellValueEnum.X ? 'x-hover' : 'o-hover'
			} ${state.playerNumber === 1 && state.player === CellValueEnum.O ? 'endgame' : ''}`}
			onClick={handleClick}
			data-value={cellValue}
		/>
	);
}
