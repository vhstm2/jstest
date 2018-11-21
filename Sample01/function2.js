function testFunc(val)
{
    if(val >0)
    {
        console.log("val : %d" , val);
        testFunc(--val);
    }
}

testFunc(10);
console.log("============================================");
var method = function(val){
    if(val >0)
    {
        console.log("val = %d",val);
        arguments.callee(--val);
    }
}
method(10);



function testFunc(){
    var a=1;
    function innerMethod(){
        return a +=1;
    }
    return innerMethod();
}

var a = testFunc();
console.log(a);



//클루
function makeAdder(a) {
    return function(b) {
        return a + b;
    }
}

x = makeAdder(5);           //x 함수의  a
y = makeAdder(20);          //y 함수의  a

console.log(x(6));          //x의 b 결과값은  5+6  
console.log(y(7));          //y의 b 결과값은 20+7





