import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { ActionEnum } from '../model/enum/action.enum';

export function GameMode() {
	const { dispatch } = useGameContextReducer();

	const handleClick = (playerNumber: number) => {
		dispatch({ type: ActionEnum.UPDATE_PLAYER_NUMBER, number: playerNumber });
	};

	return (
		<div className="flex flex-col justify-between [&>*]:bg-slate-100 [&>*]:border-solid [&>*]:border-black [&>*]:border-4 my-auto w-screen px-4 lg:max-w-7xl lg:flex-row">
			<button
				className="default-button py-12 shadow-custom hover:bg-brutal-pink lg:mr-8 lg:py-20 lg:text-5xl"
				onClick={() => handleClick(1)}
			>
				1 PLAYER
			</button>
			<button
				className="default-button py-12 shadow-custom hover:bg-brutal-pink lg:py-20 lg:text-5xl"
				onClick={() => handleClick(2)}
			>
				2 PLAYERS
			</button>
		</div>
	);
}
