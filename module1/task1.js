/* eslint-disable no-console */
/* eslint-disable indent */

const fs = require("fs");

const path = "textdummy.txt";
const encoding = "utf8";

function readFile(path, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, encoding, function (err, res) {
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
    doesFileExistAndIsReadable(path).then(readFile(path, encoding).then((readResult) => {
        let fileStrings = readResult.split("\r\n");
        printEvenLines(fileStrings);
    }))
        .catch((error) => { console.log(error.message); });
};

function doesFileExistAndIsReadable(path) {
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.F_OK | fs.constants.R_OK, (err) => {
            if (err) {
                console.error(
                    `${path} ${err.code === "ENOENT" ? "does not exist" : "is read-only"}`);

                reject(err);
            }
            else resolve(path);

        });
    });
}

result(path, encoding);