



function testFunc(val)
{
    if(val >0)
    {
        console.log("val : %d" , val);
        testFunc(--val);
    }
}
testFunc(10);