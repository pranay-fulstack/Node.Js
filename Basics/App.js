const http = require("http")
const fs=require("fs")
let server=http.createServer(function (req,res){
    fs.readFile("file.html", function(err,data){
            
        res.write(data);
        res.end();
    }
});
server.listen(3000);