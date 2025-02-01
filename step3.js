const fs = require('fs');
const axios = require("axios")
const process = require('process')
 

function catWrite(text, out){
    if (out){
        fs.writeFile(out, text, "utf8", function(error){
            if (error){
                console.error("could not write");
                process.exit(1)

            }
        });
    }else{
        console.log(text);
    }

}



function cat(path, out){
    fs.readFile(path, "utf8", function(error, data){
        if (error) {
            console.error("ERROR", error)
            process.exit(1)
        }
        catWrite("Text", data, out)
    })
}
// cat(process.argv[2]);


async function webCat(url, out){
    let response = await axios.get(url);
    catWrite(response.data, out);

}

let path;
let out;
if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else{
    path = process.argv[2];
}
if (path.slice(0, 4) === 'http') {
    webCat(path, out);
} else{
    cat(path, out);
}
