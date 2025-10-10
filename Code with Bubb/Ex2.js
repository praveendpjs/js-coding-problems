// Get the extension of a file name

function extensionFile(str){
    return str.slice(str.lastIndexOf('.'))
}
console.log(extensionFile("ex2.js"));
console.log(extensionFile("ex2.js.html"));
