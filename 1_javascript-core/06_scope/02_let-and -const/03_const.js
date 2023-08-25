// const
// let 키워드에서 알아본 특징과 모두 동일하며 상수(const) 선언에서 사용된다는 점이 특징이다.
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.
// const 키워드로 선언한 변수는 재할당 금지한다.

// const x;
const x = 1;

// x = 2;  // TypeError: Assignment to constant variable.

// 상수의 이름은 대문자로 선언해 상수임을 나타내며, 여러 단어로 이루어진 경우 _(언더스코어)로 구분해서 스네이크 케이스로 표현하는 것이 일반적이다.
// const 키워드로 선언된 변수에 객체를 할당하는 경우 프로퍼티 값을 변경할 수 있다.
// 객체를 재할당하는 것은 불가능하다.

const DISCOUNT_RATE = 0.15;

const student = {
    name : '홍길동',
    age : 20
};

student.name = '유관순';

console.log(student);

// TypeError: Assignment to constant variable.
student = {
    name : '유관순',
    age : 16
};