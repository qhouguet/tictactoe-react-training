import { useContext } from 'react';
import { GameContextReducer } from '../context/GameContextReducerProvider.tsx';

export function useGameContextReducer() {
	const gameContextReducer = useContext(GameContextReducer);
	if (!gameContextReducer) {
		throw new Error('Game context is undefined');
	}
	return gameContextReducer;
}
