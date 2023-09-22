import { useGameContextReducer } from '../hooks/useGameContextReducer';

export function Winner() {
	// const { endMessage, player } = useGameContext();
	const { state } = useGameContextReducer();

	if (state.endMessage.length > 0) {
		return <h2 className="ending-message">{state.endMessage}</h2>;
	} else {
		return <h2 className="ending-message">{state.player} turn</h2>;
	}
}
