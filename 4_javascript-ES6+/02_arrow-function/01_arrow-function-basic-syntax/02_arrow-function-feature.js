// 화살표 함수 특징
// 화살표 함수는 기존의 함수보다 표현만 간략한 것이 아니라 내부 동작 또한 간략화되어 있다.

// 1. 화살표 함수는 this를 가지지 않는다.
// 이러한 특징은 객체의 메소드 안에서 동일한 객체의 프로퍼티를 대상으로 순회하는데 사용할 수 있다.
const theather = {
    store : '건대점',
    title : ['어벤져스', '겨울왕국', '스파이더맨', '라이온킹', '알라딘'],
    showMovieList () {

        // 화살표 함수
        this.title.forEach(title => console.log(`${ this.store } : ${ title }`));

        // 일반 함수 : function 내의 this는 전역 객체를 의미한다.
        this.title.forEach(function (title) {
            // console.log(this);
            console.log(`${ this.store } : ${ title }`);
        });

    }
};

theather.showMovieList();

// 2. 화살표 함수는 new와 함께 호출할 수 없다.
// this가 없기 때문에 생성자 함수로 사용할 수 없다.
const arrowFunc = () => {};
// new arrwFunc();  // TypeError: arrwFunc is not a constructor
// 화살표 함수는 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토타입도 생성하지 않는다.
console.log(arrowFunc.hasOwnProperty('prototype'));

// 3. 화살표 함수는 super를 가지지 않는다.
// Animal 클래스 선언
//부모 클래스
class Animal {

    constructor (name, weight) {
        this.name = name;
        this.weight = weight;
    }

    move (lostWeight) {
        if (this.weight > lostWeight)
            this.weight -= lostWeight;
        console.log(`${ this.name }(은)는 움직임으로 인해 ${ lostWeight }kg 감량되어 ${ this.weight }kg이 되었습니다.`);
    }

}

// Animal을 상속 받는 Tiger 클래스 선언
class Tiger extends Animal {
    
    // Animal의 move를 확장한 Tiger의 move
    move (lostWeight) {
        
        // 화살표 함수
        // super 키워드를 지원하지 않아 super를 외부 함수에서 가져오기 때문에 Animal의 mover가 호출된다.
        setTimeout(() => super.move(lostWeight), 3000);   //setTimeout 타이머 함수

        // 일반 함수
        // setTimeout(function () { super.move(lostWeight) }, 3000);
        // SyntaxError: 'super' keyword unexpected here
        //함수는 자기 자신만의 스코프를 가진다고 생각해야 하는데 여기서는 따로 갖고 있지 않아 move(lostWeight)에서 가지기 때문에 화살표 함수로만 사용 가능 

    }

}

let tiger = new Tiger("백두산 호랑이", 90);
tiger.move(1);

// 4. 화살표 함순는 arguments를 지원하지 않는다.
(function () {

    // 화살표 함수는 본인의 arguments 3, 4가 아닌 상위 스코프의 즉시 실행 함수의 arguments 1, 2를 참조한다.
    const arrowFunc = () => console.log(arguments);
    arrowFunc(3, 4);

})(1, 2);

// => 화살표 함수는 다른 함수의 인수로 전달되어 콜백 함수로 사용되는 경우가 많다.
// 위와 같은 특징은 콜백 함수 내부의 this가 외부 함수의 this와 다르기 때문에 발생하는 문제를 해결하기 위한 의도적 설계라고도 볼 수 있다.