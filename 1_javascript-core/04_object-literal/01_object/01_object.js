// 객체 리터럴 생성

// 프로퍼티 : 객체의 상태를 나타내는 값(data)로 키-값 쌍으로 구성
// 메소드 : 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)
var student = {
    name : '유관순',
    age : 16,
    getInfo : function () {
        return `${ this.name }(은)는 ${ this.age }세 입니다.)`;
    }
};

console.log(typeof student);
console.log(student);

// 프로퍼티를 정의하지 않을 시 빈 객체 생성
var student2 = {};
console.log(typeof student2);
console.log(student2);