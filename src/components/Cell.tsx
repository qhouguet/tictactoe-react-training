import { useGameContext } from '../hooks/useGameContext';
import { CellValueEnum } from '../model/cell-value.enum';

type Props = {
	x: number;
	y: number;
};

export function Cell({ x, y }: Props) {
	const { board, updateBoard, player, updatePlayer, checkWinner, isGameWon, checkEndGame } =
		useGameContext();

	const handleClick = () => {
		updateBoard(x, y, player);
		updatePlayer();
		const winner = checkWinner();
		checkEndGame(winner);
	};

	const cellValue = board[x][y];

	return (
		<td
			className={`${isGameWon ? 'endgame' : ''} ${
				player === CellValueEnum.X ? 'x-hover' : 'o-hover'
			}`}
			onClick={handleClick}
			data-value={cellValue}
		/>
	);
}
