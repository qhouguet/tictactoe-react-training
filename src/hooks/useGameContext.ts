import {useContext} from "react";
import {GameContext} from "../contexts/GameContextProvider.tsx";

export function useGameContext() {
    const gameContext = useContext(GameContext);
    if (!gameContext) {
        throw new Error('Game context is undefined');
    }
    return gameContext;
}
