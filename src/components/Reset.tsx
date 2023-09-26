import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { ActionEnum } from '../model/enum/action.enum';

export function Reset() {
	const { dispatch } = useGameContextReducer();

	const handleAction = (action: string) => {
		switch (action) {
			case 'PLAY_AGAIN':
				dispatch({ type: ActionEnum.RESET });
				break;
			case 'RESET_SCORE':
				localStorage.removeItem('xscore');
				localStorage.removeItem('oscore');
				dispatch({ type: ActionEnum.GET_SCORE });
				break;
			default:
				throw new Error('Action is not defined');
		}
	};

	return (
		<div className="sm:flex sm:mt-10 lg:min-h-full lg:m-0 lg:flex-col">
			<button
				className="default-button shadow-custom hover:bg-brutal-pink bg-slate-100 border-solid border-black border-4 py-5 sm:mr-4 lg:my-0 lg:py-0 lg:h-full lg:mb-10"
				onClick={() => handleAction('PLAY_AGAIN')}
			>
				PLAY AGAIN
			</button>
			<button
				className="default-button shadow-custom hover:bg-brutal-pink  bg-slate-100 border-solid border-black border-4 py-5 lg:py-0 lg:my-0 lg:h-full"
				onClick={() => handleAction('RESET_SCORE')}
			>
				RESET SCORE
			</button>
		</div>
	);
}
