import React from 'react'
import CommitCard from "./CommitCard"

function CommitHistory(){
    return (
        <div className='subContainer'>
            <h2>Commit History</h2>
            <CommitCard/>
            <CommitCard/>
            <CommitCard/>
        </div>
    )
}

export default CommitHistory;