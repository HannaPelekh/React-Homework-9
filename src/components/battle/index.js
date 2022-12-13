import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setReset } from '../../redux/battle.thunk';
import './battle.css';


const Battle = () => {  
  const dispatch = useDispatch()
  const playerOneName = useSelector((state) => state.battleReducer.playerOneName, shallowEqual);
  const playerTwoName = useSelector((state) => state.battleReducer.playerTwoName, shallowEqual);
  const playerOneImage = useSelector((state) => state.battleReducer.playerOneImage, shallowEqual);
  const playerTwoImage = useSelector((state) => state.battleReducer.playerTwoImage, shallowEqual);
  const location = useLocation();
  
  const handleReset = (id) =>{    
    dispatch(setReset(id))    
  }
    return (
      <div className='battle-container'>
        <div className='battle-users'>
          {!playerOneImage ? 
            <PlayerInput
              label="Player 1"
              id='playerOne'              
            /> : 
            <PlayerPreview
              userimg={playerOneImage}
              username={playerOneName} 
            >
              <button className="reset" onClick={() => handleReset('playerOne')}>Reset</button>
            </PlayerPreview>
          }
          {!playerTwoImage ? 
            <PlayerInput
              label="Player 2"
              id='playerTwo'              
            /> :
            <PlayerPreview
              userimg={playerTwoImage}
              username={playerTwoName}  
            >
              <button className="reset" onClick={() => handleReset('playerTwo')}>Reset</button>
            </PlayerPreview>
          }
        </div>
        {playerOneName && playerTwoName && (
          <Link
              to={{
                pathname: '/battle/results',
                search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
              }}
              className='battle-btn'>
              Battle
          </Link>
        )}
      </div>
    );
  }
  
  export default Battle;
  