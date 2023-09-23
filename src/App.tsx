import { Board } from './components/Board.tsx';
import { Winner } from './components/Winner.tsx';
import { GameMode } from './components/GameMode.tsx';

export function App() {
	return (
		<div className="game-container">
			<Winner />
			<Board />
			<GameMode />
		</div>
	);
}
