// Read and write file Asynchronously...

const fs = require('fs');

fs.readFile('./files/start.txt','utf-8',(err1,data1)=>{
    console.log(data1);

    fs.readFile(`./files/input1.txt`,'utf-8',(err2,data2)=>{
        console.log(data2);

        fs.readFile('./files/input2.txt','utf-8',(err3,data3)=>{
           console.log(data3);

           fs.writeFile('./files/output2.txt',`${data1}\n${data2}\n${data3}\n\n Date created On: ${new Date()}`,()=>{
            console.log('written file is complete');
           })
        })

    })
  
})
console.log('The File is reading...');