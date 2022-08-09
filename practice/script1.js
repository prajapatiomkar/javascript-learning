var https = require('https');

async function makeRpcCall(a,b){
    
}
async function run() {
    await makeRpcCall(1, 5)
        .then((result) => console.log("The result is: " + result))
        .catch((error)=>console.log(error))
}

run();