import { Coordinate } from '../model/grid-coordinates';

export const getRandomElementFromArray = (array: Coordinate[]) => {
	const randomIndex = Math.floor(Math.random() * array.length);

	const randomElement = array[randomIndex];

	return randomElement;
};
