/* eslint-disable no-console */
/* eslint-disable indent */


function Main(path,encoding) {
    let fs = require("fs");
    fs.readFile(path,encoding, function (err, contents) {
        if (err) {
            console.log(err.message);
        }
        console.log(contents);
        let fileStrings = contents.split("\r\n");
        if (fileStrings.length < 2) {
            console.log("Strings count is less than 2!");
        }
        else {
            for (let i = 0; i < fileStrings.length(); i + 2) {
                console.log(fileStrings[i]);
            }
        }
    });
    console.log("after calling readFile");
}

Main();