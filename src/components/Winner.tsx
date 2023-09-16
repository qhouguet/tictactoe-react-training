import { useGameContext } from '../hooks/useGameContext';

export function Winner() {
	const { endMessage, player } = useGameContext();

	if (endMessage.length > 0) {
		return <h2 className="ending-message">{endMessage}</h2>;
	} else {
		return <h2 className="ending-message">{player} turn</h2>;
	}
}
