import { Board } from './components/Board.tsx';
import { Headings } from './components/Headings.tsx';
import { GameMode } from './components/GameMode.tsx';
import { useGameContextReducer } from './hooks/useGameContextReducer.ts';
import { Reset } from './components/Reset.tsx';

export function App() {
	const { state } = useGameContextReducer();

	if (state.playerNumber === 0) {
		return (
			<>
				<h1 className="w-full uppercase bg-brutal-orange text-4xl text-black font-black text-center py-4 drop-shadow-custom border-b-4 border-solid border-black">
					not a tictactoe
				</h1>
				<GameMode />
				<h3 className="mb-4 text-sm font-black mx-auto">Copyright © 2023, Houguet Quentin</h3>
			</>
		);
	} else {
		return (
			<div className="w-full min-h-screen flex flex-col justify-evenly">
				<Headings />
				<div className="w-full flex flex-col justify-center px-4 m-auto sm:max-w-xl lg:max-w-5xl lg:flex-row">
					<Board />
					<Reset />
				</div>
				<h3 className="mb-4 text-sm font-black mx-auto">Copyright © 2023, Houguet Quentin</h3>
			</div>
		);
	}
}
