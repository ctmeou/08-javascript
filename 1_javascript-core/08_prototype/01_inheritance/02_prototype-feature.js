// 프로토타입 특징

// 프로토타입은 프로퍼티를 읽을 때만 사용하며 프로퍼티 추가, 수정, 삭제 연산은 객체에 직접한다.
// login 메소드 내의 this는 프로토타입에 영향받지 않으며 this는 언제나 . 앞에 있는 객체를 의미한다.

const user = {
    id : 'user',
    login () {
        console.log(`${ this.id }님 로그인되었습니다.`);
    }
}

const student = {
    __proto__ : user
};

student.id = 'user01';
student.login();

// for in 반복문은 상속 프로퍼티도 순회 대상에 포함시킨다.
// key에 대응하는 프로퍼티가 상속 프로퍼티가 아니라 객체에 직접 구현된 프로퍼티일 경우 true를 반환한다.
for (let key in student) {
    console.log(key);

    let isOwn = student.hasOwnProperty(key);

    if (isOwn) {
        console.log(`객체 자신의 property : ${ key }`);
    } else {
        console.log(`상속 property : ${ key }`);
    }
}