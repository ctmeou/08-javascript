// 프로퍼티 변경, 추가, 삭제

var dog = {
    name : '뽀삐'
};

// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
dog.name = '두부';
dog['name'] = '두부';
console.log(dog.name);
//7번 행과 8번 행은 동일한 동작이고 표기법만 다르게 작성

// 프로퍼티 동적 추가
// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.
dog.age = 3;
dog['age'] = 3;
console.log(dog.age);
//14번 행과 15번 행은 동일한 동작이고 표기법만 다르게 작성

// 프로퍼티 삭제
// delete 연산자는 객체의 프로퍼티를 삭제하며, 만약 존재하지 않는 프로퍼티를 삭제하면 에러 없이 무시된다.
delete dog.age;
delete dog['age'];
console.log(dog.age);

delete dog.something;