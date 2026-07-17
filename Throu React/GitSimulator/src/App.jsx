import React, { useState } from "react"
import WorkingDirectory from "./components/WorkingDirectory"
import StagingArea from "./components/StagingArea"
import CommitHistory from "./components/CommitHistory"

function App() {

  const [workingFiles, setworkingFiles] = useState([]);
  const [stagedFiles, setstagedFiles] = useState([]);
  const [commitedFiles, setcommitedFiles] = useState([]);
  const [messageDiv, setmessageDiv] = useState([]);

  return (
    <>
      <h2 className="mainHeading" >Git-Simulator</h2>
      <div className="container">
        <WorkingDirectory  
          workingFiles = {workingFiles}
          setworkingFiles = {setworkingFiles}
          stagedFiles = {stagedFiles}
          setstagedFiles = {setstagedFiles}
        />
       <StagingArea 
          workingFiles = {workingFiles}
          setworkingFiles = {setworkingFiles}
          stagedFiles = {stagedFiles}
          setstagedFiles = {setstagedFiles}
          commitedFiles = {commitedFiles}
          setcommitedFiles = {setcommitedFiles}
          messageDiv={messageDiv}
          setmessageDiv = {setmessageDiv}
        />
       <CommitHistory 
          commitedFiles = {commitedFiles}
          setcommitedFiles = {setcommitedFiles}
          messageDiv={messageDiv}
          setmessageDiv = {setmessageDiv}
        />
      </div>
    </>
    
  )
}

export default App
