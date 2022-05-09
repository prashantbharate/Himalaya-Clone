import {footer,navbar} from "../footercomponents/footer.js";
document.getElementById("header").innerHTML=navbar();


var reset = document.getElementById("resetForm");
reset.addEventListener("submit", resetPass);

function resetPass(e) {
    e.preventDefault();
    let errorMsg = document.getElementById("errorMsg");
    errorMsg.innerHTML = null;

    let resetForm = new FormData(event.target);
    
    let email = resetForm.get("email");

    var data =  JSON.parse(localStorage.getItem("userData"));

    var flag = false;
    var uPass;

    for (let i = 0; i < data.length; i++){
        if(data[i].email == email){
            flag = true;
            uPass = data[i].password;;
            // console.log(uPass)
            break
        }
    }
    
    if (flag == true){
        errorMsg.innerHTML = `<ul><li>Your password is <span>"${uPass}"</span></li></ul>`;
        errorMsg.style.color = "black"
        let errSpan = document.querySelector("#errorMsg span");
        errSpan.style.color = "blue";
    }
    else {
        errorMsg.innerHTML = "<ul><li>No account found with that email.</li></ul>";
    }
}




document.querySelector("#footer").innerHTML = footer();