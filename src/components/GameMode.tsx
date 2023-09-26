import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { ActionEnum } from '../model/enum/action.enum';

export function GameMode() {
	const { dispatch } = useGameContextReducer();

	const handleClick = (playerNumber: number) => {
		dispatch({ type: ActionEnum.UPDATE_PLAYER_NUMBER, number: playerNumber });
	};

	return (
		<div className="button-container">
			<button className="button-game-mode" onClick={() => handleClick(1)}>
				1 PLAYER
			</button>
			<button className="button-game-mode" onClick={() => handleClick(2)}>
				2 PLAYERS
			</button>
		</div>
	);
}
