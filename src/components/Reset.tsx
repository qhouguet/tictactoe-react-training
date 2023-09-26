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
		<>
			<button className="button-reset" onClick={() => handleAction('PLAY_AGAIN')}>
				PLAY AGAIN
			</button>
			<button className="button-reset" onClick={() => handleAction('RESET_SCORE')}>
				RESET SCORE
			</button>
		</>
	);
}
