import React from 'react'

function CommitCard({commitedFiles, setcommitedFiles, messageDiv, setmessageDiv}) {
  return (
    <>
      {messageDiv.map((message, i) => (
          <div className='commitCard' key={i}>
            <span>{message}</span>
            <div className='commitedFiles'>
              {commitedFiles[i]?.map((file, j) => (
                <button key={j}>{file}</button>
              ))}
            </div>
          </div>
        ))}
    </>
  )
}

export default CommitCard
