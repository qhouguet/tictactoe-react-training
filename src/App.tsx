import { Board } from './components/Board.tsx';
import { Headings } from './components/Headings.tsx';
import { GameMode } from './components/GameMode.tsx';
import { useGameContextReducer } from './hooks/useGameContextReducer.ts';
import { Reset } from './components/Reset.tsx';

export function App() {
	const { state } = useGameContextReducer();

	if (state.playerNumber === 0) {
		return <GameMode />;
	} else {
		return (
			<>
				<Headings />
				<Board />
				<Reset />
			</>
		);
	}
}
