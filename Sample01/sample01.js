
//var 변수의 범위가 없다
//; 세미콜론은 선택이다.
// let name = "홍길동";
// let age = 30;
// console.log(age);
// console.log(name);

let name = "sanghyun";
//문자열의 길이 
let len = name.length;
console.log(len);
//문자열의 해당되는 문자열을 다른 문자열로 변환
let newName = name.replace('sang','aa');
console.log(newName);

//문자열의 인덱스에 해당되는 문자를 반환한다.
 let char = newName.charAt(2);
 console.log(char);

 //대분자로 변환
 console.log(newName.toUpperCase());
 //소문자로 변환
 console.log(newName.toLowerCase());

 var x =0;
    x +=5;
    //정수의 연산
    console.log(x);
    //문자열 결합
    console.log('hello' + 'world');
    //문자열변환
    console.log('1'+2+3+4);
    
    //양쪽을 같은 자료형으로 변환해 비교
    console.log(123 == '123');
    //양쪽을 정확하게 비교한다
    console.log(123 === '123');