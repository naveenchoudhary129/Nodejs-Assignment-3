const fs = require("fs")

const http = require("http")

const server = http.createServer((req , res) => {

    fs.readFile("index.html" , "utf-8" , (err , data) => {
        res.writeHead(200,  {"content-type" : "text/html"})
        res.write(data)
        res.end() 
    })
}).listen(5000 , () => console.log("Server is running"));
