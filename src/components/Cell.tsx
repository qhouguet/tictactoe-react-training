import { useGameContext } from '../hooks/useGameContext';

type Props = {
	x: number;
	y: number;
};

export function Cell({ x, y }: Props) {
	const handleClick = () => {
		updateBoard(x, y, player);
		updatePlayer();
		updateMove();

		const winner = checkWinner();

		if (winner !== null) {
			console.log(winner + ' wins');
		} else if (winner === null && move <= 0) {
			console.log("it's a tie");
		}
	};

	const { board, updateBoard, player, updatePlayer, checkWinner, move, updateMove } =
		useGameContext();
	const cellValue = board[x][y];

	return <td onClick={handleClick} data-value={cellValue} />;
}
