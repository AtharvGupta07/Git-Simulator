import React, { useState } from 'react'
import FileCard from './FileCard'

function WorkingDirectory({workingFiles, setworkingFiles, stagedFiles, setstagedFiles}) {

  const [filename, setfilename] = useState("");

  function handleAddFile(){
    setworkingFiles([...workingFiles, filename]);
  }

  return (
    <div className='subContainer'>
      <h2>Working Directory</h2>
      <div className='workingDirectoryFunctions'>
          <input 
            type="text"
            placeholder='e.g. filename.txt'
            value={filename}
            onChange={(e) => setfilename(e.target.value)} />
          <button onClick={handleAddFile}>Add</button>
      </div>
      <FileCard 
        workingFiles = {workingFiles} 
        setworkingFiles = {setworkingFiles}
        stagedFiles = {stagedFiles} 
        setstagedFiles = {setstagedFiles}
      />
    </div>
  )
}

export default WorkingDirectory
