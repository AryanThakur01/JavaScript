// npm = global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// npm i nodemon -D (install dev dependencies)
/**
 * npm start
    => "start": "nodemon app.js" 
            -set this in the package.json
 * npm run dev
    => "dev": "nodemon app.js"
            -set this in the package.json
 * SET ANY OF THE  ABOVE PROPERTIES IN THE SCRIPTS TAG IN PACKAGE.JSON FILE
*/


// npx is also there that can be used
// version 12.12.4
// {Major Change}.{Minor Change}.{Patch}


const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
console.log(items);
const newItems = _.flattenDeep(items);
console.log(newItems);

console.log("Hello World")