function add(x,y)
{
    var total = x+y;
    return total;
}

var result = add(2,3);
console.log("add 함수 result : "+result);

function add2()
{
    //arguments 인자값으로 들어오는 값들을 배열로 받을수있게 한다.
    var sum =0;
    for(var i=0, j = arguments.length; i<j; i++)
    {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(2,3,4,5));


var avg = function()
{
    var sum = 0;

    for(var i = 0 , j = arguments.length ; i<j ; i++)
    {
        sum += arguments[i];
    }

    return sum / arguments.length;    //들어온 값들의 평균
}

console.log(avg(3,4,5,6));


function makePerson(first , last)
{
    return {
        first : first,
        last  : last,
        fullName : function() 
        {
            return this.first + ' ' + this.last;
        },
        fullNamereversed: function()
        {
            return this.last + ' , ' + this.first;
        }
    }
}

var person = makePerson("sanghyun" , "kim");
console.log(person.fullName);
console.log(person.fullNamereversed);

var func = person.fullName;
console.log(func());







