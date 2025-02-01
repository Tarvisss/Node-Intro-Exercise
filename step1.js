const fs = require('fs');
const process = require('process')
 
function cat(path){
    fs.readFile(path, "utf8", function(error, data){
        if (error) {
            console.log("ERROR", error)
            process.exit(1)
        }
        console.log("Text", data)
    })
}
cat(process.argv[2]);