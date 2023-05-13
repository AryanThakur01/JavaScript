const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);



console.log('start');
const start = async () => {
    try {
        for (let index = 0; index < 50; index++) {
            console.log(index);

        }

        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`, {flag: 'a'});
        
        for (let index = 50; index < 101; index++) {
            console.log(index);

        }
        console.log(first, second);
    }
    catch (error) {
        console.log(error);
    }
}

start();
console.log('end');



// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// };
// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));