

function Person(first , last)
{
    this.first = first;
    this.last = last;
    this.fullName = function(){
        return this.first + ' ' + this.last;
    }
    this.fullNameReversed = function(){
        return this.last + ' ' + this.first;
    }
}

var person = new Person("홍","길동");
console.log(person.fullName());



function Person2(first,last)
{
    this.first = first;
    this.last = last;
}

Person2.prototype.fullName = function()
{
    return this.first + ' ' + this.last;
}

Person2.prototype.fullNameReversed = function()
{
    return this.last + ' ' + this.first;
}

var person2 = new Person2("김","철수");
console.log(person2.fullName());



class Person3
{
    constructor(first,last)
    {
        this.first = first;
        this.last = last;
    }

    FullName()
    {
        return this.first + ' ' + this.last;
    }
}

var person3 = new Person3("김","병서");
console.log(person3.FullName());






