
function add(a,b,callback)
{
    var result = a+b;
    callback(result);
}

// function resultFunc(result)
// {
//     console.log("Result = %d", result);
// }

add(10,10, function(result)
{
    console.log("Result = %d", result);

    add(5,5,function(result)
    {
        console.log("result = %d",result);
    });

});


