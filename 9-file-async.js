const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (error, result)=>{
    if(error){
        console.log(error);
        return;
    }

    const first = result;

    readFile('./content/second.txt', 'utf-8', (error, result)=>{
        if(error){
            console.log(error);
            return;
        }

        const second = result;
    
        writeFile('./content/result-file.txt', `The result is here : ${first}, ${second}`,'utf-8',(error, result)=>{
            console.log("HERE i am :"+error);
            console.log("HERE i am :"+result);
        });
       
    });

});