const fs=require('fs');

//sync
//fs.writeFileSync('./test.txt','Hello World');

//async
/*fs.writeFile('./test.txt','Hi I am Arnob',(err)=>{
    if(!err)
    {
        console.log('Write file successful');
    }
    else
    {
        console.log('Error occured while writing to file',err);
    }
});*/

//read sync
//console.log(fs.readFileSync('./test.txt','utf-8'));

//read async
/*fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(!err && data)
    {
        console.log(data);
    }
    else
    {
        console.log("Error: ",err);
    }
})*/

//append sync
//fs.appendFileSync('./test.txt',`\n${Date.now()}`);

//append async
/*fs.appendFile('./test.txt',`\nTrying something new ${Date.now()}`,(err)=>{
    if(!err)
    {
        console.log('Append async was successful');
    }
    else
    {
        console.log('Error: ',err);
    }
});*/

//console.log(fs.statSync('./test.txt'));

fs.cpSync('./test.txt','./copy.txt');