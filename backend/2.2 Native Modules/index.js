const fs = require("fs");
// fs.writeFile("message.txt", "Hello from Darius on Node.js",err => {
//     if(err )throw err;
//     console.log("File written");
// });

fs.readFile("message.txt",(err,data) => {
    if(err) throw err;
    console.log(data.toString());
})