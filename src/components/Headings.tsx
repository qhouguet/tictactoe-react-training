import { useGameContextReducer } from '../hooks/useGameContextReducer';

export function Headings() {
	const { state } = useGameContextReducer();

	return (
		// <h2 className="ending-message">
		// 	{state.endMessage.length > 0 ? state.endMessage : `${state.player} turn`}
		// </h2>

		<>
			<div>
				<h2 className="ending-message">Player 2</h2>
				<h2 className="ending-message">Player 1</h2>
			</div>
			<h2 className="ending-message">{state.endMessage.length > 0 && state.endMessage}</h2>
			<div>
				<h3>{state.xWin}</h3>
				<h3>{state.oWin}</h3>
			</div>
		</>
	);
}
