// 자바스크립트 객체 형태 = {key: value, key: value}

let student = {
    name: "이정찬",
    age: 29
};

console.log(student);
console.log(typeof(student));
console.log(student.name);

class Student {
    name;
    age;

    // 생성자
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let s = new Student("잊엋",52);
// s.name = "dlf"
// s.age = "32"
console.log(s);

//변수명 앞 # 프라이빗이다
class User {
    #username;
    password;

    set setUsername(username) {
        this.#username = username;
    }

    get username() {
        return this.#username;
    }
}

let user = new User();
user.setUsername = "chan";
console.log(user.username);

let dataMap = new Map();
dataMap.set("username", "junil");
dataMap.set("password", "1234");

console.log(dataMap);
console.log(dataMap.get("password"));


