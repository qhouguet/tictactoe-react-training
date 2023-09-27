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
		<div className="relative w-full mx-auto my-5 lg:mr-10">
			{state.endMessage.length > 0 ? (
				<>
					<h2 className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-3xl lg:text-5xl text-white text-center w-full px-2 font-black z-50">
						{state.endMessage}
					</h2>
					<div className="SQUARE max-w-xl max-h-xl sm:max-w-lg sm:max-h-lg aspect-square top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 absolute bg-black opacity-90 lg:max-w-desktop lg:max-h-desktop"></div>
				</>
			) : (
				<></>
			)}

			<table className="SQUARE bg-white max-w-xl max-h-xl sm:max-w-lg sm:max-h-lg lg:max-w-desktop lg:max-h-desktop  border-4 border-solid border-black  border-collapse border-spacing-0 shadow-custom my-0 mx-auto">
				<tbody>
					{state.board.map((row, x) => (
						<tr className="[&>*]:border-4 [&>*]:border-solid [&>*]:border-black" key={x}>
							{row.map((_, y) => (
								<Cell key={y} x={x} y={y} />
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
