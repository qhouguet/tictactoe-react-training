import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { ActionEnum } from '../model/enum/action.enum';

export function Reset() {
	const { dispatch } = useGameContextReducer();

	const handleReset = () => {
		dispatch({ type: ActionEnum.RESET });
	};

	return <button onClick={handleReset}>RESET</button>;
}
