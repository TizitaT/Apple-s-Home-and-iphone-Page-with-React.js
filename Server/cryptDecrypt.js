//bcrypt password
//npm install bcryptjs
// const bcrypt = require("bcryptjs");
// // Store hash in your password DB.
// let salt = bcrypt.genSaltSync();
// let hash = bcrypt.hashSync(password, salt);

const crypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) =>
        textToChars(salt).reduce((a, b) => a ^ b, code);

    return text
        .split("")
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join("");
};

const decrypt = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) =>
        textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
};
console.clear();
// let key = "!@#$%^";
// let decryptedTxt = crypt(key, "text");
// console.log(decryptedTxt);

let theOrginalTxt = decrypt("key", "1a160e100518020746");
console.log(theOrginalTxt);

module.exports = { crypt, decrypt };
