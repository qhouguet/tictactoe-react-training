import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { ActionEnum } from '../model/enum/action.enum';
import { CellValueEnum } from '../model/enum/cell-value.enum';

type Props = {
	x: number;
	y: number;
};

export function Cell({ x, y }: Props) {
	const { state, dispatch } = useGameContextReducer();

	const handlePlayerTurn = () => {
		dispatch({ type: ActionEnum.PLAYER_UPDATE_BOARD, x, y, value: state.player });
		dispatch({ type: ActionEnum.CHECK_ENDGAME });
		dispatch({ type: ActionEnum.CHANGE_PLAYER });
	};

	const handleComputerTurn = () => {
		setTimeout(() => {
			dispatch({ type: ActionEnum.COMPUTER_UPDATE_BOARD });
			dispatch({ type: ActionEnum.CHECK_ENDGAME });
			dispatch({ type: ActionEnum.CHANGE_PLAYER });
		}, 300);
	};

	const handleClick = () => {
		handlePlayerTurn();

		if (state.playerNumber === 1) {
			handleComputerTurn();
		}

		dispatch({ type: ActionEnum.UPDATE_SCORE });
	};

	const cellValue = state.board[x][y];
	const preventClick =
		state.isGameWon || (state.playerNumber === 1 && state.player === CellValueEnum.O);

	return (
		<td
			className={`${preventClick ? 'endgame' : ''} ${
				state.player === CellValueEnum.X ? 'x-hover' : 'o-hover'
			}`}
			onClick={handleClick}
			data-value={cellValue}
		/>
	);
}
