window.onload = () => {
    // let userObject = {
    //     addId: "test",
    //     addPassword: "1234"
    // }

    // const userJson = localStorage.getItem("userInfo")
    // const userInfoList = userJson === null ? new Array() : JSON.parse(userJson);

    // userInfoList.push(userObject)

    // localStorage.setItem("userInfo", JSON.stringify(userInfoList))
}



const signInButton = document.querySelector(".signin")
signInButton.onclick = () => {
    const inputId = document.querySelector(".Id")
    const inputPassword = document.querySelector(".password")

    let userObject = {
        addId: inputId.value,
        addPassword: inputPassword.value
    }

    const userJson = localStorage.getItem("userInfo")
    const userInfoList = userJson === null ? new Array() : JSON.parse(userJson);

    console.log(userInfoList);
    // userInfoList
    for(let i = 0; i < userInfoList.length; i++) {
        if(userInfoList[i].addId === userObject.addId && userInfoList[i].addPassword === userObject.addPassword) {
            alert("로그인 되셨습니다")
        } else {
            alert("아이디나 비밀번호가 다릅네다")
        }
        
    }

}
