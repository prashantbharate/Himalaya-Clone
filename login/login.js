import {footer,navbar} from "../footercomponents/footer.js";
document.getElementById("header").innerHTML=navbar();

var login = document.getElementById("loginForm");
login.addEventListener("submit", getLogin);

function getLogin(e) {
    e.preventDefault();
    let errorMsg = document.getElementById("errorMsg");
    errorMsg.innerHTML = null;

    let loginForm = new FormData(event.target);
    
    let email = loginForm.get("email");
    let password = loginForm.get("password");

    var data = JSON.parse(localStorage.getItem("userData"));
    var flag = false;
    var uEmail;
    var uName;
    
    
    for (let i = 0; i < data.length; i++){
        if(data[i].email == email && data[i].password == password){
            flag = true;
            uEmail = data[i].email;
            uName = `${data[i].firstName} ${data[i].lastName}`;
            localStorage.setItem("userAccount", JSON.stringify(data[i]));
            break;
        }
    }
    if (flag == true){
        
        location.href = `../account/account.html`;
    }
    else {
        errorMsg.innerHTML = "<ul><li>Incorrect email or password.</li></ul>";
    }
}




document.querySelector("#footer").innerHTML = footer();