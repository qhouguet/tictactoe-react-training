import { useGameContextReducer } from '../hooks/useGameContextReducer';
import { CellValueEnum } from '../model/enum/cell-value.enum';

export function Headings() {
	const { state } = useGameContextReducer();

	return (
		<div className="flex flex-col sm:flex-row">
			<div
				className={`flex flex-col justify-center items-center [&>*]:uppercase [&>*]:py-1.5 ${
					state.player === CellValueEnum.X ? 'bg-brutal-green' : 'bg-white'
				} w-full border-y-4 border-transparent -mt-1 sm:mt-0 sm:border-b-4 sm:border-t-0 sm:border-black sm:border-solid`}
			>
				<div className="flex text-4xl font-black">
					{state.player === CellValueEnum.X ? <span className="-mt-0.5 mr-2">{'>'}</span> : ''}
					<h2>Player 1</h2>
				</div>

				<h3 className="font-normal">Win : {state.xWin}</h3>
			</div>
			<div
				className={`flex flex-col justify-center items-center [&>*]:uppercase [&>*]:py-1.5 ${
					state.player === CellValueEnum.O ? 'bg-brutal-pink' : 'bg-white'
				} w-full border-solid border-black border-y-4 -mt-1 sm:mt-0 sm:border-t-0 sm:border-l-4 sm:-ml-4`}
			>
				<div className="flex text-4xl font-black">
					{state.player === CellValueEnum.O ? <span className="-mt-0.5 mr-2">{'>'}</span> : ''}
					<h2>Player 2</h2>
				</div>

				<h3 className="font-normal">Win : {state.oWin}</h3>
			</div>
		</div>
	);
}
