const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    //FIRST CALL BACK OF FIRST READFILE FUNCTION
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        //SECOND CALLBACK OF SECOND READFILE FUNCTION
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            // CALLBACK FOR THE WRITEFILE FUNCTION
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})
console.log('starting next task');