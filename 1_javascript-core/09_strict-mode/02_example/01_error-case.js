// error case

// 1. 암묵적 전역
// ReferenceError: x is not defined
(function () {
    // 'use strict';
    x = 1;
    console.log(x);
})();

// 2. 변수, 함수, 매개변수의 삭제
// delete 연산자로 변수, 함수, 매개변수를 삭제하면 문법 에러 발생
// 객체의 프로퍼티 삭제 시에만 사용 가능
//SyntaxError: Delete of an unqualified identifier in strict mode.
(function () {
    // 'use strict';
    var x = 1;
    delete x;
})();

// 3. 매개변수의 이름 중복
// SyntaxError: Duplicate parameter name not allowed in this context
(function () {
    // 'use strict';
    function test(x, x) {
        return x + x;
    }
    console.log(test(1,2));
})();

// 4. with문의 시용
// wiht는 객체 이름을 생략할 수 있어 코드를 간단히할 수 있다는 장점이 있지만
// 성능과 가독성이 나빠지는 문제로 사용하지 않는 것이 좋다.
//SyntaxError: Strict mode code may not include a with statement
(function () {
    // 'use strict';
    const test = { x : 1, y : 2, z : 3};

    with (test) {
        console.log(x);
        console.log(y);
        console.log(z);
    }

})();