// 반환문

// 반환문
// 반환문 이후의 문은 실행되지 않고 무시된다.
function hello (name) {
    return `${ name }님 안녕하세요`;
    console.log(name);
}

console.log(hello('유관순'));

// 반환 값이 없을 시 반환문 생략 가능하며 암묵적으로 undefined 반환
// 반환 값을 명시적으로 지정하지 않으면 undefined 반환
function func () {
    console.log('함수가 호출되었습니다.');
    return;
}

console.log(func());