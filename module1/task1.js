/* eslint-disable no-console */
/* eslint-disable indent */

const fs = require("fs");

const path = "textdummy.txt";
const encoding = "utf8";

function readFile(filename, enc) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, enc, function (err, res) {
            if (err) reject(err);
            else resolve(res);
        });
    });
}

function printEvenLines(fileStrings) {
    if (fileStrings.length < 2) {
        throw new Error("File must have at least 2 lines");
    }
    else {
        fileStrings = fileStrings.filter(function (item, index) {
            return (index % 2 !== 0);
        });
        console.log(fileStrings);
    }
}

let result = function readFileEvenLines(path, encoding) {
    doesFileExist(path).then(readFile(path, encoding).then((readResult) => {
        let fileStrings = readResult.split("\r\n");
        printEvenLines(fileStrings);
    }))
        .catch((error) => { console.log(error.message); });
};

let doesFileExist =  function(filename) {
    return new Promise((resolve, reject) => {
        fs.access(filename, fs.constants.F_OK | fs.constants.R_OK, (err) => {
            if (err) {
                console.error(
                    `${filename} ${err.code === "ENOENT" ? "does not exist" : "is read-only"}`);
                
                reject(err);
                }
            else resolve(filename);
            
        });
    });
};
result(path, encoding);