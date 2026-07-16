import React from 'react'
import FileCard from './FileCard'

function WorkingDirectory() {
  return (
    <div className='subContainer'>
      <h2>Working Directory</h2>
      <div className='workingDirectoryFunctions'>
          <input type="text" placeholder='e.g. filename.txt' />
          <button>Add</button>
      </div>
      <FileCard/>
      <FileCard/>
    </div>
  )
}

export default WorkingDirectory
