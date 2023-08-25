// 자바스크립트의 함수는 객체이다.
// 함수는 값으로 취급할 수 있고 프로퍼티 값으로도 사용할 수 있다.
// 메소드 : 객체 내부에 정의된 함수

var dog = {
    name : '뽀삐',
    eat : function(food) {
        console.log(`${ this.name }(은)는 ${ food }를 맛있게 먹어요.`);
    }
};

// 1. 마침표 표기법(dot notation)
console.log(dog.name);
dog.eat('고구마');

// 2. 대괄호 표기법(squre bracket notation)
console.log(dog['name']);
// console.log(dot[name]); : 프로퍼티 키는 반드시 따옴표로 감싼 문자열을 사용한다.
dog['eat']('고구마');

// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시 대괄호 표기법을 사용한다.
var obj = {
    'dash-key' : 'dash-value',
    0 : 1
};

// console.log(obj.dash-key);       //ReferenceError: key is not defined
// console.log(obj.'dash-key');     //문법적 에러 발생(처음부터 빨간줄 생김)
// console.log(obj[dash-key]);      //ReferenceError: dash is not defined
console.log(obj['dash-key']);       //올바른 표기법

// console.log(obj.0);              //문법적 에러 발생(처음부터 빨간줄 생김)
// console.log(obj.'0');            //문법적 에러 발생(처음부터 빨간줄 생김)
console.log(obj[0]);                // 프로퍼티 키가 숫자로 이루어진 문자열인 경우 대괄호 표기법에서 따옴표 생략 가능
console.log(obj['0']);