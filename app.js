// Read and Write file synchronously

const fs=require("fs");

let textIn=fs.readFileSync('./files/input.txt','utf-8');
console.log(textIn);

let content = `Message for output text file. \nDate created ${new Date()}`
fs.writeFileSync('./files/output.txt',content);