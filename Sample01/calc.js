var calc =('./calc')

calc.add = function(a,b)
{
    return a+b;
}

calc.subtract = function(a,b)
{
    return a-b;
}

calc.multplay = function(a,b)
{
    return a*b;
}

calc.divide = function(a,b)
{
    return a/b;
}

module.exports = calc;