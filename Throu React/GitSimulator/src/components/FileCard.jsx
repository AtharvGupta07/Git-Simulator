import React from 'react'

function FileCard(){
    return (
        <div className='fileCard'>
           <span>FileName.txt</span>
           <div className='filecard-btn'>
            <button> X </button>
            <button> + </button>
            </div> 
        </div>
    )
}
export default FileCard;
