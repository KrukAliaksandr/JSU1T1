/* eslint-disable no-console */
/* eslint-disable indent */


function displayFileEvenLines(path, encoding) {
    checkParametres(path, encoding);
    let fs = require("fs");
    fs.readFile(path, encoding, function (err, contents) {
        if (err) {
            console.log(err.message);
        }
        console.log(contents);
        let fileStrings = contents.split("\r\n");
        if (fileStrings.length < 2) {
            throw new Error("File must have at least 2 lines");
        }
        else {
            for (let i = 0; i < fileStrings.length(); i + 2) {
                console.log(fileStrings[i]);
            }
        }
    });
    console.log("after calling readFile");
}

function checkParametres(pathToFile, encoding) {
    if (typeof pathToFile !== "string" || typeof encoding !== "string") {
        throw new Error("Wrong type of variable. Path to file or encoding must be String");
    }
}

displayFileEvenLines("textdummy.txt", "utf8");