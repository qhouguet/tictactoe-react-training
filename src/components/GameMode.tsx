import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { ActionEnum } from '../model/enum/action.enum';

export function GameMode() {
	const { state, dispatch } = useGameContextReducer();

	const handleClickOnePlayer = () => {
		dispatch({ type: ActionEnum.UPDATE_PLAYER_NUMBER, number: 1 });
	};

	const handleClickTwoPlayers = () => {
		dispatch({ type: ActionEnum.UPDATE_PLAYER_NUMBER, number: 2 });
	};

	return (
		<div>
			<button onClick={handleClickOnePlayer}>MODE 1 JOUEUR</button>
			<button onClick={handleClickTwoPlayers}>MODE 2 JOUEUR</button>
			<span>{state.computerMove}</span>
		</div>
	);
}
