

var fs = require('fs'); //파일을 읽기위한 모듈


var data = fs.readFile("../README.md",'UTF-8' , function(err,data){
    console.log("DATA = " , + data);
})


//파일 쓰기 생성
// fs.writeFile('../output.txt' , 'HelloWorld' , function(err){
//     if(err)
//     {
//         console.log('Error : ' + err);
//     }
//     console.log("쓰기완료");
// })