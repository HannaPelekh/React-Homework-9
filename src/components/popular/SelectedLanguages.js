import React, { useEffect, memo, useCallback } from "react"; 
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getRepos } from "../../redux/popular.thunk";

const languages = ['All', 'JavaScript', 'Ruby', 'CSS', 'Python', 'Java'];

const SelectedLanguages = memo(() => {    
    
    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state) => state.popularReducer.selectedLanguage, shallowEqual)
    const loading =  useSelector((state) => state.popularReducer.loading)
    
    
    useEffect(() => {         
        dispatch(getRepos(selectedLanguage))
    }, []);
    
    const onSelectedLanguage = useCallback((selectedLanguage)  => {  
        dispatch(getRepos(selectedLanguage))        
    }, [selectedLanguage]);
    
    return (
     <ul className="languages">
        {languages.map((language, index) => {
            return (
                <li 
                    key={index}
                    className={!loading ? "clickable" : "disable"}   
                    style={language === selectedLanguage ? {color: '#d0021b'} : null}                                    
                    onClick={() => {                        
                        language !== selectedLanguage && 
                        onSelectedLanguage(language)
                    }}                                   
                >                    
                    {language}                    
                </li>
            )
        })}
      </ul>
    );
  });
  
  export default SelectedLanguages;
  


