import { Board } from './components/Board.tsx';
import { Winner } from './components/Winner.tsx';

export function App() {
	return (
		<div className="game-container">
			<Winner />
			<Board />
		</div>
	);
}
