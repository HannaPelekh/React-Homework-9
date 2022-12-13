import React from "react";
import SelectedLanguages from "./SelectedLanguages";
import RepoGrid from "./RepoGrid";
import './popular.css';

const Popular = () => {     
    return (
        <div className="popular-container">
            <SelectedLanguages/>  
            <RepoGrid/>
        </div>
    );    
}
export default Popular;
