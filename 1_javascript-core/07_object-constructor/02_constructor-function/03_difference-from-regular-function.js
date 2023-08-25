// 일반 함수와의 차이점
// 일반 함수와 생성자 함수의 형식적인 차이는 없다.(첫 문자를 대문자로 기술하여 구별하려 노력한다.)
// 단, new 연산자와 함께 호출할 때 생성자 함수로 동작하며 만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다.

function Student (name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${ this.name }(은)는 ${ this.age }세 입니다.`;
    }    
}

// 일반 함수로 호출된 Student는 반환문이 없으므로 undefined를 반환한다.
// 일반 함수로 호출된 Student 내의 this는 전역 객체를 가리킨다.

const student = Student ('강감찬', 35);
console.log(student);
console.log(age);
console.log(name);
console.log(getInfo());

// 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6에서는 new.target을 지원한다.
// new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
// new 연산자 없이 일반 함수로 호출된 함수 내부의 new.target은 undefined다.
// new 연산자와 함께 호출되지 않은 경우 undefined이므로 new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
// new 연산자 없이 호출해도 if문에서 다시 new 연산자와 함께 호출해주었으므로 객체를 반환받는다.

function Dog (name, age) {
    if (!new.target) {
        return new Dog(name, age);
    }
    this.name = name;
    this.age = age;
}

const dog = Dog('뽀삐', 3);
console.log(dog);

// 대부분의 빌트인 생성자 함수(Object, String, Number, Boolean, Date, ...)는 new 연산자와 함께 호출되었는지 확인 후 적절한 값을 반환한다.
// String, Number, Boolean의 경우 new 연산자 없이 호출하면 객체 값이 아닌 문자열, 숫자, 불리언 값(원시 값)을 반환한다.
// 이를 데이터 타입 변환에 활용하는 것이다.