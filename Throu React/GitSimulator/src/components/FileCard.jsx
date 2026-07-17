import React from 'react'

function FileCard({workingFiles, setworkingFiles, stagedFiles, setstagedFiles}){

    function remove(index){
        setworkingFiles(
            workingFiles.filter( (_,i) => i !== index)
        );
    }

    function movestage(index){
        setstagedFiles([...stagedFiles, workingFiles[index]]);
        remove(index); 
    }

    // console.log(stagedFiles);

    return (
        <>
            {workingFiles.map((file, i) => (
                <div className="fileCard" key={i}>
                    <span>{file}</span>
                    <div className='filecard-btn'>
                        <button onClick={() => remove(i)}> X </button>
                        <button onClick={()=> movestage(i)}> + </button>
                    </div>
                </div> 
            ))}
        </>
    )
}
export default FileCard;
