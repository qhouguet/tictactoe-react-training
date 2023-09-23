import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { ActionEnum } from '../model/enum/action.enum';
import { CellValueEnum } from '../model/enum/cell-value.enum';

type Props = {
	x: number;
	y: number;
};

export function Cell({ x, y }: Props) {
	// const { board, updateBoard, player, updatePlayer, checkWinner, isGameWon, checkEndGame } =
	// 	useGameContext();

	const { state, dispatch } = useGameContextReducer();

	const handleClick = () => {
		dispatch({ type: ActionEnum.UPDATE_BOARD, x: x, y: y, value: state.player });
		dispatch({ type: ActionEnum.CHECK_ENDGAME });
		dispatch({ type: ActionEnum.UPDATE_PLAYER });
		if (state.playerNumber === 1) {
			dispatch({ type: ActionEnum.COMPUTER_PLAYING });
			dispatch({ type: ActionEnum.UPDATE_BOARD_1P });
			dispatch({ type: ActionEnum.CHECK_ENDGAME });
			dispatch({ type: ActionEnum.UPDATE_PLAYER });
		}
	};

	const cellValue = state.board[x][y];

	return (
		<td
			className={`${state.isGameWon ? 'endgame' : ''} ${
				state.player === CellValueEnum.X ? 'x-hover' : 'o-hover'
			}`}
			onClick={handleClick}
			data-value={cellValue}
		/>
	);
}
