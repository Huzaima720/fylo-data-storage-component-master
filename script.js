let storedFiles = []


let TotalGB = 715


function  displayStorage(){
    let storageLeft= 1000 - TotalGB
    let usedPercentage = (TotalGB / 1000) * 100

    let usedStorage = document.querySelector('.storage .amount')
    usedStorage.innerHTML = `${TotalGB} GB`
    
    let remainingStorage = document.querySelector('.storage-left .amount')
    remainingStorage.innerHTML =  storageLeft
    
    let usedPercentageDisplay = document.querySelector('.progress .bar')
    usedPercentageDisplay.style.width = `${usedPercentage}%`
}

displayStorage()



const file = document.querySelector('.file');
const folder = document.querySelector('.folder');

const fileInput = document.querySelector('#fileInput');
const folderInput = document.querySelector('#folderInput');

file.addEventListener('click', (e) => {
    fileInput.click();
});

folder.addEventListener('click', () => {
    folderInput.click();
});

fileInput.addEventListener('change', (e) => {
    let inputFiles = Array.from(e.target.files)
    inputFiles.forEach(file => {
        storedFiles.push({
            name: file.name,
            type: file.type,
            size: file.size,
        });
    })
    let GB = filesSize(storedFiles)
    TotalGB = Math.floor(TotalGB + GB);
    console.log(`Total GB: ${TotalGB}`)
    displayStorage()

    
});

folderInput.addEventListener('change', (e) => {
    let inputFiles = Array.from(e.target.files)
    inputFiles.forEach(file => {
        storedFiles.push({
            name: file.name,
            type: file.type,
            size: file.size,
        });
    })
    let GB = filesSize(storedFiles)
    TotalGB = Math.floor(TotalGB + GB);

    console.log(`Total GB: ${TotalGB}`)
    displayStorage()

   
});

function filesSize(storedFiles){
    let Bytes = 0;
    storedFiles.forEach(file => {
        Bytes = Bytes + file.size
    })
    let MB = Bytes / (1024 * 1024)
    let GB = MB / 1024
    return GB
}



