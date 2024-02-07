
window.onload = () => {
    getAddList();
}

const input = document.querySelector("#add")

input.onkeydown = (e) => {
    if(e.keyCode === 13 ){
        handleAddTodoSubmit()
        input.value= "";
    }
}


function handleAddTodoSubmit() {
    const input = document.querySelector("#add")

    let addjson = localStorage.getItem("value")
    let addList = addjson !== null ? JSON.parse(addjson) : new Array();

    let lastAddId = addList.length === 0 ? 0 : addList[addList.length - 1].addId;
    let addObject = {
        addId: lastAddId + 1,
        content: input.value
    }

    addList.push(addObject);

    localStorage.setItem("value", JSON.stringify(addList));
    getAddList ()
}


function getAddList () {
    const ul = document.querySelector("#ul")

    let addjson = localStorage.getItem("value")
    let addList = addjson !== null ? JSON.parse(addjson) : new Array();

    ul.innerHTML = "";

    for(let add of addList) {
        ul.innerHTML += `
            <li>
                <span>${add.addId}번</span>
                <span>${add.content}</span>
                <input type="text" id="editInput">
                <button id="editButton" onclick="editClick(${add.addId})">수정</button>
                <button id="removeButton" onclick="removeClick(${add.addId})">삭제</button>
            </li>
        `
    }
}

function removeClick(addId) {
    let selected = confirm("정말로 삭제하시겠습니까?");
    
    if(!selected) {
        return;
    }   

    const addjson = localStorage.getItem("value")
    const addList = addjson !== null ? JSON.parse(addjson) : new Array();


    const newAddList = addList.filter(add => add.addId !== addId);

    localStorage.setItem("value", JSON.stringify(newAddList));
    getAddList();
}

function editClick(addId) {

    let addjson = localStorage.getItem("value")
    let addList = addjson !== null ? JSON.parse(addjson) : new Array();

    let findIndex = -1;
    
    console.log("수정누른 아이디값" + addId);

    for(let i = 0; i < addList.length; i++) {
        if(addList[i].addId === addId) {
            findIndex = i;
            break;
        }
    }
    

    if(findIndex === -1) {
        alert("수정오류");
        return;
    }

    console.log("찾은 아이디값의 인덱스값"+findIndex);

    const editInput = document.querySelectorAll("#editInput");

    addList[findIndex].content = editInput[findIndex].value;

    // console.log(addList);
    
    localStorage.setItem("value", JSON.stringify(addList));
    getAddList();
}