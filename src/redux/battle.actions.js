import { GET_USER_DATA, SET_USER_DATA_RESET, GET_BATTLE_LOADING, GET_WINNER_BATTLE, GET_BATTLE_FAILURE} from "./battle.constants"

export const getUserData = (id, userName) => ({
    type:'GET_USER_DATA',    
    id, 
    userName
})

export const setDataReset = (payload) => ({
    type:'SET_USER_DATA_RESET', 
    payload
})

export const getBattleLoading = () => ({
    type:'GET_BATTLE_LOADING'
})

export const getWinnerBattle = (payload) => ({
    type:'GET_WINNER_BATTLE',
    payload    
})
export const getBattleFailure = (payload) => ({
    type:'GET_BATTLE_FAILURE',
    payload    
})
