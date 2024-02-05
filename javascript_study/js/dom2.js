const submitButton = document.querySelector(".input-submit");

// 이벤트 속성 
submitButton.onclick = () => {
    const input = document.querySelector(".inputs");

    const dataList = document.querySelector(".data-list");
    
    // innerHTML 태그안에 자식 태그를 ~~
    dataList.innerHTML += `<li>${input.value}</li>`;


}

/*
    let submitButton = {
        onclick: null
    }

    submitButton.onclick = () => {

    }
*/ 