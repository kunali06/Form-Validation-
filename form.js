  let nameInput=document.getElementById("name");
    let button=document.getElementById("btn");
    let error=document.getElementById("error");

    button.addEventListener("click",validate)

    function validate(){
        let name=nameInput.value.trim();

        if(name.length<3){
            error.textContent="Name too short";
            error.style.color="red";
        }
        else{
            error.textContent="Form Submitted";
            error.style.color="green";
        }
    }
