import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { Cell } from './Cell';
import { ActionEnum } from '../model/enum/action.enum';
import { useEffect } from 'react';

export function Board() {
	const { state, dispatch } = useGameContextReducer();

	useEffect(() => {
		dispatch({ type: ActionEnum.GET_SCORE });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
