import { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/battle.thunk";

const PlayerInput = memo(({ label, id }) => {  
    
    const [userName, setUserName] = useState(``);
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        dispatch(getUser(id, userName))          
    }
    return (      
        <form className="form_container" onSubmit={handleSubmit}>
            <label htmlFor={id} className="player_title">{label}</label>
            <input
                className="player_input"
                id={id}
                type='text'
                placeholder="Github Username"
                autoComplete="off"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className="player_btn"
                disabled={!userName}
                type='submit'
            >Submit</button>
        </form>
    );
});

export default PlayerInput;
