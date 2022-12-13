import { getUserData, setDataReset, getBattleLoading, getWinnerBattle, getBattleFailure} from "./battle.actions";
import { startBattle } from "../components/General/calculations";

export const getUser = (id, userName) => async (dispatch) => {  
    await dispatch(getUserData(id, userName));    
}

export const setReset = (id) => async (dispatch) => {
    await dispatch(setDataReset(id));
}

export const getWinner = (users) => async (dispatch) => {
    await dispatch(getBattleLoading());
    try {
        const players = await startBattle(users)        
        if (players.length) {
            dispatch(getWinnerBattle(players))
        }
    } catch (error) {
        await dispatch(getBattleFailure(error));
    }
}


