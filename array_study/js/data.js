// spread연산 

// let array = [1,2,3,4];
// array.push(5);
// array = [...array]; // 배열안에 있는 값들이 복사된다 (1,2,3,4)
// array = [...array, 5]; // 그래서 결과가 => (1,2,3,4,5)
// array = [...array, 5, 6, ...array]; // => (1,2,3,4,5,6,1,2,3,4)

// console.log(array)

// let obj = {
//     name : "김준일",
//     age : 31
// }

// // 키값은 중복되지 않아 맨마지막 키 값의 벨류만 입력됨 !
// let obj2 = {
//     ...obj,
//     // 부분 변경 할때 사용
//     name : "김준이",
//     name : "gigi"
// }

// console.log(obj2);

// 비구조할당

// let obj = {
//     id : 1,
//     name : "jungchan",
//     age: 30
// }

// let {id, age} = obj;
// console.log(age);


let dataList = new Array(); // or [];  둘다 같음

window.onload = () => {
    getDataList();

    const addInput = document.querySelector("#add")

    addInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            const inputValue = addInput.value;

            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;

            const dataObj = {
                id : lastId + 1,
                content: inputValue
            }

            fetch("http://localhost:8080/data_array/data/addition",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataObj)
             
            }).then(response => {
                console.log(response);
                })

            dataList = [...dataList, dataObj];

            addInput.value = "";

            getDataList();
        }
    }
}

function ContentData({id, content}) {
    return `
        <li>
            <span>${id}번 </span>
            <span>${content}</span>
            <input type="text" id = "edit-input" value=${content}>
            <button onclick="editData(${id})">수정</button>
            <button onclick="removeData(${id})">삭제</button>
        </li>
    `;
}

function getDataList() {
    const contentList = document.querySelector("#ul");

    contentList.innerHTML = "";

    for(let dataObj of dataList) {
        contentList.innerHTML += ContentData(dataObj);
    }
}



function removeData(id) {
    
    dataList = dataList.filter((dataObj) => dataObj.id !== id);

    getDataList();
}

function editData(id) {
    const editInput = document.querySelectorAll("#edit-input")

    // let findIndex = -1;

    // for(let i = 0; i < dataList.length; i++) {
    //     if(dataList[i].id === id) {
    //         findIndex = i;
    //         break;
    //     }
    // }

////// indexof()의 기능 예제
////// let array = [1,2,3,4,5];
////// dataList.indexOf(3); // -> 2

    let findObj = dataList.filter((dataObj) => dataObj.id === id)[0];

    findIndex = dataList.indexOf(findObj)
    console.log(findIndex);

    dataList[findIndex].content = editInput[findIndex].value;

    getDataList();
}