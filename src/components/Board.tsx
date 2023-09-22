import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { Cell } from './Cell';

export function Board() {
	const { state } = useGameContextReducer();

	return (
		<table>
			<tbody>
				{state.board.map((row, x) => (
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
