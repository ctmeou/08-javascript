// 인스턴스 생성 과정
// 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩되는 과정이 런타임 이전에 실행된다.
// 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
// 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
// 3-1. 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
// 3-2. 명시적으로 원시값을 반환하면 무시되고 this가 반환된다.
// 따라서 생성자 함수 내부에서 return을 생략하는 것이 기본이다.

function Student (name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${ this.name }(은)는 ${ this.age }세 입니다.`;
    }

    // return {};
    // return 1;
    
}

const student = new Student('홍길동', 20);
console.log(student);