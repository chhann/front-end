function add(num1, num2) {
    console.log("num1: " + num1);
    console.log(`num2: ${num2}`); // EL표현식
    return num1 + num2;
}

console.log(add(10,20));


// 함수자체에 주소값을 메길 수 있다
// 함수를 변수에 담을 수 있다
let addFunction = add;


console.log(add);
console.log(addFunction);
console.log(addFunction(20, 30));

let user = {
    username: "chan",
    password: "1234",
    addFunction: function add(a,b) {
        return a + b
    }
}

console.log(user.addFunction(10, 20));

// 익명 함수
let sub = function sub(a, b) {
    return a - b;
}

let result = sub(10, 5);
console.log(result);

console.log(sub);

// 화살표함수 (람다식)
let div = (a, b) => {
    return a / b ;
}

div (a, b){
    return a / b;
}

console.log(div(10,5));

div = (a, b) => a / b;;

