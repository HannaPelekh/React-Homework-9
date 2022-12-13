import { fetchPopularRepos } from "../api"
import { getReposLoading, getReposFailure, getReposSuccess, setLanguage } from "./popular.actions"

export const getRepos = (language) => async (dispatch) => {    
    await dispatch(setLanguage(language));
    await dispatch(getReposLoading());
    try {
        const repos = await fetchPopularRepos(language);        
        if(repos.length) {
            dispatch(getReposSuccess(repos));
        }
    } catch (error) {
        await dispatch(getReposFailure(error));
    }
}