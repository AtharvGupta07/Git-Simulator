import React from "react";
import StageCard from "./StageCard"

function StagingArea(){
    return(
        <div className='subContainer'>
            <h2>Staging Area</h2>
            <div className="stagingAreaFunctions">
                <input type="text" placeholder="E.g., First Commit" />
                <button>Commit</button>
            </div>

            <StageCard/>
            <StageCard/>

        </div>
    )
}
export default StagingArea;

