let path = require("path");
let fs = require("fs");
let inputArr = process.argv.slice(2);
let mainDir = inputArr[0];
// let firstModule = inputArr[1];
// let SecondModule = inputArr[2];
// let thirdModule = inputArr[3];
let cwd = process.cwd();

// console.log(cwd);
let mainDirPath = path.join(cwd,mainDir);
// let firstModulePath = path.join(cwd,mainDir,firstModule);
// let SecondModulePath = path.join(cwd,mainDir,SecondModule);
// let thirdModulePath = path.join(cwd,mainDir,thirdModule);

let isMainModulePresent = fs.existsSync(mainDirPath);
// console.log(isMainModulePresent);
if (isMainModulePresent) {
    console.log("Directory is already created");    
    return;
}else{
    console.log(mainDir,"created");
    fs.mkdirSync(mainDirPath);
    let topicFromInput = inputArr.slice(1,4);
    for(let i = 0; i < topicFromInput.length; i++){
        let cTopicPath = path.join(mainDir,topicFromInput[i]);
        console.log(topicFromInput[i], "created");
        fs.mkdirSync(cTopicPath);
        for(let j = 1; j<=5; j++){
            let modulePath = path.join(cTopicPath , "Module" + j);
            fs.mkdirSync(modulePath);
            console.log("Module" + j ,"created inside",topicFromInput[i]);
            let filePath = path.join(modulePath,"content.md");
            fs.writeFileSync(filePath, "# Hello");
        }
    }
}

// let path = require("path");
// let fs =   require("fs");
// let inputArr = process.argv.slice(2);
// let mainDir = inputArr[0];
// // let firstModule = inputArr[1];
// // let SecondModule = inputArr[2];
// // let thirdModule = inputArr[3];
// let cwd = process.cwd();
// let mainDirPath = path.join(cwd,mainDir);
// console.log("Main directory path created",mainDirPath);

// let isMainModulePresent = fs.existsSync(mainDirPath);
// if (isMainModulePresent) {
//     console.log("Directory is already present");
//     return;
// }else{
//     fs.mkdirSync(mainDirPath);
//     let topicFromInput = inputArr.slice(1,4);
//     for(let i = 0; i < topicFromInput.length; i++){
//         let cTopicPath = path.join(mainDir,topicFromInput[i]);
//         console.log(topicFromInput[i], "created");
//         fs.mkdirSync(cTopicPath);
//         for(let j = 1; j<=5;j++){
//             let modulePath = path.join(cTopicPath, "Module" + j);
//             fs.mkdirSync(modulePath);
//             console.log("Module" + j , "created inside", topicFromInput[i]);
//             let filePath = path.join(modulePath, "content.md");
//             fs.writeFileSync(filePath,"# Hello");
//         }
//     }
// }