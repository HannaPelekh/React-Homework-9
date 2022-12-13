import { getProfile, getRepos } from "../../api";

const handleError = (error) => console.error(error);

const getStarCount = (repos) =>{    
    return repos.reduce((acc, repo) => {        
        return acc + repo.stargazers_count;
    }, 0)
}

const calculateScore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);    
    return followers + totalStars;
}
const getUserData = (username) => {
    return Promise.all([
        getProfile(username),
        getRepos(username)
    ])
    .then(([profile, repos]) => {        
        return {
            profile: profile,
            score: calculateScore(profile, repos)
        }
    })
}

const sortPlayers = (players) => {   
    return players.sort((a, b) => 
        b.score - a.score
    );
}

export const startBattle = (players) => {
    return Promise.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError)
}