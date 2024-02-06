const submit = document.querySelector(".input-submit");
let count = 1;

submit.onclick = () => {
    const name = document.querySelector(".name");
    const age = document.querySelector(".age");
    const address = document.querySelector(".address");

    const dataList = document.querySelector(".data-list")

    console.log(name.value == "");

    if(name.value == "" || age.value == "" || address.value == "") {
        alert("빈칸을 입력하세요")
    } else {
        dataList.innerHTML += 
        `<tr>
            <th>${count}</th>
            <th>${name.value}</th>
            <th>${age.value}</th>
            <th>${address.value}</th>
        </tr>`;
    
        
        name.value = "";
        age.value = "";
        address.value = "";
        count++;
    }
}    