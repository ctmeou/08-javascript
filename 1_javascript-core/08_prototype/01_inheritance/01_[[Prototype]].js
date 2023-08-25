// [[Prototype]]

const user = {
    activate : true,
    login : function () {
        console.log('로그인되었습니다.');
    }
};

const student = {
    passion : true
};

// __proto__는 [[Prototype]]의 getter, setter
student.__proto__ = user;

console.log(student.passion);
console.log(student.activate);
student.login();
// => "student의 프로토타입은 user이다." 또는 "student는 user를 상속받는다."라고 표현한다.
// => 프로토타입에서 상속받은 프로퍼티를 삭속 프로퍼티라고 한다.

// 프로토타입 체인
const greedyStudent = {
    class : 11,
    __proto__ : student
};

console.log(greedyStudent.class);
console.log(greedyStudent.passion);     // student에서 상속 받은 상속 프로퍼티
console.log(greedyStudent.activate);    // user에서 상속 받은 상속 프로퍼티