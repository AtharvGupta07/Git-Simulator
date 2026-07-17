import React, { useState } from "react";
import StageCard from "./StageCard"

function StagingArea({workingFiles, setworkingFiles, stagedFiles, setstagedFiles, commitedFiles, setcommitedFiles, messageDiv, setmessageDiv}){

    const [message, setmessage] = useState("");

    function commitProgress(){
        setcommitedFiles([...commitedFiles ,stagedFiles]);
        setstagedFiles([]);
        setmessageDiv([...messageDiv,message]);   
    }

    return(
        <div className='subContainer'>
            <h2>Staging Area</h2>
            <div className="stagingAreaFunctions">
                <input 
                    type="text"
                    placeholder="E.g., First Commit"
                    value={message}
                    onChange={(e)=>setmessage(e.target.value)}
                />
                <button onClick={commitProgress} >Commit</button>
            </div>

            <StageCard
                workingFiles = {workingFiles}
                setworkingFiles = {setworkingFiles}
                stagedFiles = {stagedFiles}
                setstagedFiles = {setstagedFiles}
            />

        </div>
    )
}
export default StagingArea;

