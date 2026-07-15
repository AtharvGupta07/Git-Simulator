import React from "react"
import WorkingDirectory from "./components/WorkingDirectory"
import StagingArea from "./components/StagingArea"
import CommitHistory from "./components/CommitHistory"

function App() {

  return (
    <>
      <h2 style={{textAlign: "center"}}>Git Simulator</h2>
      <div className="container">
       <WorkingDirectory/>
       <StagingArea/>
       <CommitHistory/>
      </div>
    </>
    
  )
}

export default App
