// var name = 'Sang';

// if(name =='sang')
// {
//     console.log('my name is sang');
// }
// else if(name =='Sang')
// {
//     console.log("MY name is Sang");
// }


for(var i=0;i<5;i++)
{
    console.log("i = %d",i);
}


//let time1 = 100;
// while(time1 > 100)
//{
//     time1--;
//     console.log("Result : %d",time1);
//}

// let time2 = 100;
// do{
//     console.log("Result : %d",time2);
//     time2--;
// }while(time2 >100)

let action ="raw";

switch(action)
{
    case 'draw':
        console.log('draw');
        break;
    case 'raw':
        console.log('raw');
        break;
    default:
        console.log('nothing');
}