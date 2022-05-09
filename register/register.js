import {footer,navbar} from "../footercomponents/footer.js";
document.getElementById("header").innerHTML=navbar();





window.addEventListener("load", ()=>{
    let data = localStorage.getItem("userData")
    // console.log(data)

    data = JSON.parse(data)

    if (data != null){
        arr = data;
    }
    else {
        arr = [];
    }
    console.log(arr)
})

let formRegister = document.getElementById("registerForm");
formRegister.addEventListener("submit", registerUser);


function userData(firstName, lastName, email, password) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password
}

var arr;

function registerUser(e){
    e.preventDefault();

    let form = new FormData(event.target);

    let firstName =form.get("firstName");
    let lastName = form.get("lastName");
    let email = form.get("email");
    let password = form.get("password");

    let userName = `${firstName} ${lastName}`;

    let usrData = JSON.parse(localStorage.getItem("userData")) || [];
    let errMsg = document.getElementById("errMsg");
    var flag =false;
    for(var i = 0; i < usrData.length; i++){
        if (email == usrData[i].email){
            flag = true;
            break;
        }
    }
    if (flag == true){
        errMsg.innerHTML = `This email address is already associated with an account. If this account is yours, you can <span>reset your password</span></li></ul>`
    
        var rstPass = document.querySelector("#errMsg span");
        rstPass.style.color = "#777777";
        rstPass.style.cursor = "pointer";
        rstPass.addEventListener("click", ()=>{
            location.href = `../lost Password/lostPassword.html`
        })
    }
    else {
        var url = `../account/account.html?name=${userName}&&e-mail=${email}`
        location.href = url;

        let user = new userData (firstName, lastName, email, password)
        // console.log(user)
        arr.push(user);
        console.log(arr)
        localStorage.setItem("userAccount", JSON.stringify(user));
        localStorage.setItem("userData", JSON.stringify(arr));
    }
    let fName = document.getElementById("userFirstName");
    fName.value = null;

    let lName = document.getElementById("userLastName");
    lName.value = null;

    let emailId = document.getElementById("userEmail");
    emailId.value = null;

    let pass = document.getElementById("userPassword");
    pass.value = null;
}


document.querySelector("#footer").innerHTML = footer();