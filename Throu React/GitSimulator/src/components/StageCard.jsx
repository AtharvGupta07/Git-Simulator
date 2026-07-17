import React from 'react'

function StageCard({workingFiles, setworkingFiles, stagedFiles, setstagedFiles}) {
  
  function moveBack(i){
    setworkingFiles([...workingFiles, stagedFiles[i]]);
    setstagedFiles(
      stagedFiles.filter((_,j)=> j !== i )
    );
  }
  
  return (
    <>
      {stagedFiles.map((file, index) => (
        <div className='stageCard' key={index}>
          <span>{file}</span>
          <button onClick={() => moveBack(index)}>-</button>
        </div>
      ))}
    </>
  )
}

export default StageCard
