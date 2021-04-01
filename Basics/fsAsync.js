const fs=require("fs");
fs.readFile("one.txt","utf-8",(data,err)=>{
  console.log(data)
  fs.writeFile("three.txt",(err)=>{})
});
console.log("hello good morning");