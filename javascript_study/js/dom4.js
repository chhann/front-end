const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
    const boxContainer = document.querySelector(".box-container");
    const boxContainer2 = document.querySelector(".box-container2")

    boxContainer.innerHTML += 
    `
    <div class="box"></div>
    `;

    // boxContainer.removeChild(); 
    // boxContainer.appendChild(); //추가

    const boxList = document.querySelectorAll(".box");

    for(let i = 0 ; i < boxList.length; i++) {
        boxList[i].onclick = () => {
            let isRedBox = boxList[i].classList.contains("red-box")
            let isBlueBox = boxList[i].classList.contains("blue-box") 
    
            if(isBlueBox) {
                boxList[i].classList.remove("blue-box");
                boxList[i].classList.add("red-box");
                
            } else if(isRedBox){
                
                boxContainer.removeChild(boxList[i]);
                boxContainer2.appendChild(boxList[i]);
                
            } else {
                boxList[i].classList.add("blue-box");
            }
        }
    }




}
