const fs = require('fs');
const axios = require("axios")
const process = require('process')
 
function cat(path){
    fs.readFile(path, "utf8", function(error, data){
        if (error) {
            console.error("ERROR", error)
            process.exit(1)
        }
        console.log("Text", data)
    })
}
// cat(process.argv[2]);


async function webCat(url){
    let response = await axios.get(url);
    console.log(response.data);

}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else{
    cat(path);
}
