var http = require('http');
//서버 생성 할당
var server = http.createServer();

//서버구동시 특정한 ip주소로 같은 ip를 쓰는서버라면  통신을 구분할떄 포트를 쓰게된다.
var port = 3000;


server.listen(port,function()
{
    console.log("start Server");
});


//누가 접속하게되면 실행
server.on('connection',function (socket) 
{
    var addr = socket.address();
    console.log("누군가 접속함");
});

//누군가 요청을 하게되면
server.on('request',function(req,res){
    console.log("누군가 요청함");

    //응답을 받고 넣어줄 친구(res)
    //text로 읽어줄거야 
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    res.write("반갑습니다.");
    res.end();
});



//노드는 이벤트 기반으로 비동기 방식으로 동작함
//함수의 실행 결과도 이벤트로 전달
//node 는 Event Emitter를 통해 Event 전달

//이벤트 
//노드 객체는 EventEmitter 를 상속받을 수 있슴.
//상속후에는 EventEmitter 객체의 on() emit()메소드 사용
//on() 을 통해 이벤트 리스너 등록


//on(event,listener) = 지정한 이벤트의 리스너를 추가
//once(event,listener) = 지정한 이벤트의 리스너를 추가 한번 실행후 제거
//remove(event,listener) = 지정한 이벤트의 리스너를 제거