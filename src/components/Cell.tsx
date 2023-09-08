import { useGameContext } from '../hooks/useGameContext';

type Props = {
	x: number;
	y: number;
};

export function Cell({ x, y }: Props) {
	const handleClick = () => {
		console.log(cellValue, x, y);
	};

	const gameContext = useGameContext();
	const cellValue = gameContext.board[x][y];

	return <td onClick={handleClick} data-value={cellValue} />;
}
