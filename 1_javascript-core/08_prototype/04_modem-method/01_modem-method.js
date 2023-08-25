// 프로토타입 접근 시 사용하는 모던 메소드

const user = {
    activate : true
};

// Object.create(proto) : [[Prototype]]이 proto를 참조하는 빈 객체를 만든다.
const student = Object.create(user);
console.log(student.activate);

// Object.getPrototypeOf(obj) : obj의 [[Prototype]]을 반환한다.
// Object.setPrototypeOf(obj, proto) : obj의 [[Prototype]]을 proto가 되도록 설정한다.
console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(student) === user);

Object.setPrototypeOf(student, {});
console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(student) === user);

// __proto__를 getter, setter로 직접 사용하면 키가 "__proto__"일 때 에러가 발생하는 의도하지 않은 상황이 생길 수도 있다.
// 따라서 메소드 사용을 권장한다.
const obj = Object.create(user);
let key = "__proto__";
console.log(obj[key]);
obj[key] = { test : "새로운 객체 덮어쓰기" };
console.log(obj[key]);
console.log(obj.__.proto__);