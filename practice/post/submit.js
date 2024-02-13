function submitClick() {
    const inputs = document.querySelectorAll(".data-inputs")

    const student = {
        name: inputs[0].value,
        age: inputs[1].value
    }

    console.log(student)

    const jsonData = JSON.stringify(student);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }

    fetch("http://localhost:8080/practice_pos/DataPostServlet", option)

}