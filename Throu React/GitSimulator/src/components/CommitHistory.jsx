import React from 'react'
import CommitCard from "./CommitCard"

function CommitHistory({commitedFiles, setcommitedFiles, messageDiv, setmessageDiv}){
    return (
        <div className='subContainer'>
            <h2>Commit History</h2>
            <CommitCard
                commitedFiles = {commitedFiles}
                setcommitedFiles = {setcommitedFiles}
                messageDiv={messageDiv}
                setmessageDiv = {setmessageDiv}
            />
        </div>
    )
}

export default CommitHistory;