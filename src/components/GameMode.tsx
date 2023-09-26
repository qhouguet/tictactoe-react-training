import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { ActionEnum } from '../model/enum/action.enum';

export function GameMode() {
	const { dispatch } = useGameContextReducer();

	const handleClickOnePlayer = () => {
		dispatch({ type: ActionEnum.UPDATE_PLAYER_NUMBER, number: 1 });
	};

	const handleClickTwoPlayers = () => {
		dispatch({ type: ActionEnum.UPDATE_PLAYER_NUMBER, number: 2 });
	};

	return (
		<div className="button-container">
			<button className="button-game-mode" onClick={handleClickOnePlayer}>
				1 PLAYER
			</button>
			<button className="button-game-mode" onClick={handleClickTwoPlayers}>
				2 PLAYERS
			</button>
		</div>
	);
}
