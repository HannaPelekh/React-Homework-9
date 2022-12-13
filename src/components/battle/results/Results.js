import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../General/loader/loader';
import PlayerPreview from '../PlayerPreview';
import { getWinner} from '../../../redux/battle.thunk';
import './results.css';

const Results = () => {     
    const winner = useSelector((state) => state.battleReducer.winner, shallowEqual);
    const loser = useSelector((state) => state.battleReducer.loser, shallowEqual);
    const loading = useSelector((state) => state.battleReducer.loading);
    const error = useSelector((state) => state.battleReducer.error);
    const dispatch = useDispatch();
    const {search} = useLocation();

    useEffect(() => {
    const searchParams = new URLSearchParams(search);
    dispatch(getWinner([searchParams.get('playerOneName'), searchParams.get('playerTwoName')]))
    }, [search])    
    
    

    if (winner !== null && loser !== null){
        return (
            <div className='results-container'>
                {error ? (
                    <div className="errors-container">
                        <h2 className='error'>An error has occurred</h2>                    
                        <Link to='/battle' className="reset">Reset</Link>
                    </div>
                ) : 
                    loading ? 
                        <Loader/> : (                       
                    <div className='results-box'>
                        <div className='winner-container'>
                            <h1 className='winner-title'>WINNER</h1>
                            <div className='user-box'>
                                <PlayerPreview
                                    userimg={winner.profile.avatar_url}                        
                                    username={winner.profile.login} 
                                >                                  
                                    <p> followers: {winner.profile.followers}</p>
                                    <p> following: {winner.profile.following}</p>
                                    <p> score: {winner.score}</p>                         
                                </PlayerPreview>
                            </div>
                        </div>
                        <div className='loser-container'>
                            <h1 className='loser-title'>LOSER</h1>
                            <div className='user-box'>
                                <PlayerPreview
                                    userimg={loser.profile.avatar_url}                        
                                    username={loser.profile.login} 
                                >  
                                    <p> followers: {loser.profile.followers}</p>
                                    <p> following: {loser.profile.following}</p>
                                    <p> score: {loser.score}</p>                         
                                </PlayerPreview>
                            </div>
                        </div>
                        <Link to='/battle' className="reset">Reset</Link>
                    </div>  )       
                }
            </div>
        );
    }
}

export default Results;