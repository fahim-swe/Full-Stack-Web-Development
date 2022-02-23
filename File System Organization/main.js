// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help 

let types = {
   media: ["mp4", "mkv"],
   archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
   documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
   app: ['exe', 'apk', 'dmg', 'pkg', 'deb'],
   program: ['c', 'cpp', 'java', 'js', 'py']
}


let inputArr = process.argv.slice(2);

let command = inputArr[0];

let fs = require("fs"); // file system

let path = require("path");


switch(command){
    case "tree":
        treeFn(inputArr[1], "");
        break;
    
    case "organize":
        organizeFn(inputArr[1]);
        break;

    case "help":
        helpFn();
        break;

    default:
        console.log("Please input Right command");
        break;
}


function treeFn(dirPath)
{
    if(dirPath == undefined){
        treeHelper(process.cwd(), ""); // current directory path
        return;
    }
    else{
        let destExist = fs.existsSync(dirPath);
        if(destExist){
            treeHelper(dirPath, "");
        }
        else{
            console.log("Kindly Enter the current path");
            return;
        }
    }
}

function treeHelper(dirPath, space)
{
    // if file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        console.log(space + "├──" + path.basename(dirPath));
    }
    else{
        console.log(space+"└── "+path.basename(dirPath));

        try{
            let content = fs.readdirSync(dirPath);
            for(let i = 0; i < content.length; i++){
                let p = path.join(dirPath, content[i]);
                treeHelper(p, space+"\t");
            }
        }catch(a){
            console.log("ERROR:     " + dirPath);
        }
       
    }
}

// Sudo Code: 
// 1. input-> directory path given 
// 2. create-> organized_files -> directory
// 3. identify categories of all the files present in that input directory
// 4. copy/cut files to that organized directory inside of any of category folder
function organizeFn(dirPath)
{
    let destPath;
    // 1. input-> directory path given
    if(dirPath == undefined){
        destPath = process.cwd();
    }
    else{
        let doesExist= fs.existsSync(dirPath);
        if(doesExist){

            // create organized file directory 
            // 2. create-> organize_files------------ directory
            destPath = path.join(dirPath, "organized_files");
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath);
            }


        }
        else{
            return;
        }
    }


    // 3. identify categories of all the files present in that input directory
    organizeHelper(dirPath, destPath);
}


function organizeHelper(source, destination)
{
    // 3. identity categories of all the file present in 'source' directory
    let childNames = fs.readdirSync(source); // all files/forder in source directory

    // console.log(childNames); // print name of all files 


    for(let i = 0; i < childNames.length; i++){
        let childAddress = path.join(source, childNames[i]);  // path of file/forder
        
        let isFile = fs.lstatSync(childAddress).isFile(); // isFile
        if(isFile){
            // 4. copy/cut files to that oragazied directroy
            let category = getCategory(childAddress);

            // console.log(childNames[i], "belongs to ---", category);

            sendFiles(childAddress, destination, category);
        }
    }


}

function getCategory(name)
{
    let ext = path.extname(name);
    // console.log(ext);

    ext = ext.slice(1);

    for(let type in types){
        let cTypeArray = types[type];

        for(let i = 0; i < cTypeArray.length; i++){
            if(ext == cTypeArray[i]){
                return type;
            }
        }
    }

    return "others";
}

// Help 
function helpFn()
{
    const newLocal = (`
List of all the commands:
    node main.js tree "directoryPath"
    node main.js organize "directoryPath"
    node main.js help
    `);
}


function sendFiles(childAddress, destination, categories)
{
    // console.log(childAddress);
    // console.log(destination);
    // console.log(categories);
    // console.log();

    let categoryPath = path.join(destination, categories);  
    // console.log(categoryPath);

    if(!fs.existsSync(categoryPath)){
        fs.mkdirSync(categoryPath);  // crate categories types file in destination
    }


    let fileName = path.basename(childAddress); // file name of childAddress

    
    let destFilePath = path.join(categoryPath, fileName);
    
    fs.copyFileSync(childAddress, destFilePath);  // create and empty file with destfilepath
    // then copy

    console.log(fileName, "copied to ", "---->",  categories);


    // for cut 
    fs.unlinkSync(childAddress);
}