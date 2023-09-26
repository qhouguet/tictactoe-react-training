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
		dispatch({ type: ActionEnum.UPDATE_SCORE });
	};

	const handleComputerTurn = () => {
		setTimeout(() => {
			dispatch({ type: ActionEnum.COMPUTER_UPDATE_BOARD });
			dispatch({ type: ActionEnum.CHECK_ENDGAME });
			dispatch({ type: ActionEnum.CHANGE_PLAYER });
			dispatch({ type: ActionEnum.UPDATE_SCORE });
		}, 300);
	};

	const handleClick = () => {
		handlePlayerTurn();

		if (state.playerNumber === 1) {
			handleComputerTurn();
		}
	};

	const cellValue = state.board[x][y];
	const preventClick =
		state.isGameWon || (state.playerNumber === 1 && state.player === CellValueEnum.O);

	return (
		<td
			className={`${preventClick ? 'pointer-events-none' : ''} ${
				state.player === CellValueEnum.X
					? 'sm:after:hover:content-["X"] sm:hover:after:text-brutal-green'
					: 'sm:after:hover:content-["O"] sm:hover:after:text-brutal-pink'
			} text-black font-black data-[value='X']:bg-brutal-green data-[value='O']:bg-brutal-pink cursor-pointer w-1/3 h-1/3 text-5xl lg:text-8xl text-center`}
			onClick={handleClick}
			data-value={cellValue}
		/>
	);
}
