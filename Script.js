const addBtn = document.getElementById('addBtn');
const workingInput = document.getElementById('workingInput');
const workingDoc = document.getElementById('workingDoc');
const stagingDiv = document.querySelector('#stagingDiv');
const publish = document.querySelector("#commitBtn");
const finalMsg = document.querySelector("#finalMsg");
const finalDiv = document.querySelector(".final"); 

let workingFiles = [];
let stagedFiles = [];
let comitedFiles = [];
let curIdx = 1;

addBtn.addEventListener("click", ()=>{
    let value = workingInput.value;
    let file = {
        id: curIdx,
        name: value
    };
    workingFiles.push(file);
    curIdx++;
    renderWorkingFiles();

});

function renderWorkingFiles(){
    workingDoc.innerHTML = "";

    for(let i = 0; i < workingFiles.length; i++){
        let mainDiv = document.createElement("div");
        mainDiv.classList.add("Sample_workingDoc");

        let fileDiv = document.createElement("div");
        fileDiv.textContent = workingFiles[i].name;
        fileDiv.classList.add("filename");

        let btnDiv = document.createElement("div");
        let close = document.createElement("button");
        close.innerHTML = "x";
        let move = document.createElement("button");
        move.innerHTML = "→";
        btnDiv.appendChild(close);
        btnDiv.appendChild(move);
        btnDiv.classList.add("workingBtn");

        mainDiv.appendChild(fileDiv);
        mainDiv.appendChild(btnDiv);
        workingDoc.appendChild(mainDiv);
        workingInput.value = "";

        close.addEventListener("click", ()=>{
            deleteFile(i);
        });

        move.addEventListener("click",()=>{
            moveFiles(i);
        });
    }
}

function deleteFile(index){
    workingFiles.splice(index,1);
    renderWorkingFiles();
}

function moveFiles(index){
    let file = workingFiles[index];
    stagedFiles.push(file);
    deleteFile(index);
    renderStagingFiles();
}

function renderStagingFiles(){
    stagingDiv.innerHTML = "";
    for(let i = 0; i < stagedFiles.length; i++){
        let movedDiv = document.createElement("div");
        movedDiv.classList.add("Sample_workingDoc");

        let revertBtn = document.createElement("button");
        revertBtn.innerHTML = "-"
        revertBtn.classList.add("stagingBtn");
        
        let stagedDiv = document.createElement("div");
        stagedDiv.textContent = stagedFiles[i].name;
        stagedDiv.classList.add("filename");

        movedDiv.appendChild(stagedDiv);
        movedDiv.appendChild(revertBtn);
        stagingDiv.appendChild(movedDiv);

        revertBtn.addEventListener("click", ()=>{
            sendBack(i);
        })
    }
}

function sendBack(index){
    let file = stagedFiles[index];
    stagedFiles.splice(index,1);
    renderStagingFiles();
    workingFiles.push(file);
    renderWorkingFiles();
}

publish.addEventListener("click",()=>{
    let msg = document.createElement("h3");
    msg.textContent = finalMsg.value;
    msg.classList.add("fileName");
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("fileTag");

    for(let i = 0 ; i < stagedFiles.length; i++){
        let newBtn = document.createElement("button");
        newBtn.textContent = stagedFiles[i].name;
        btnDiv.appendChild(newBtn);
    }
    let storage = document.createElement("div");
    storage.appendChild(msg);
    storage.appendChild(btnDiv);
    storage.classList.add("storage");
    finalDiv.appendChild(storage);
    finalMsg.value = "";


    comitedFiles.push({
        message: finalMsg.value,
        files: [...stagedFiles]
    });
    stagedFiles = [];
    renderStagingFiles();
});