import { useGameContext } from '../hooks/useGameContext';
import { Cell } from './Cell';

export function Board() {
	const { board } = useGameContext();

	return (
		<table>
			<tbody>
				{board.map((row, x) => (
					<tr key={x}>
						{row.map((_, y) => (
							<Cell key={y} x={x} y={y} />
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
