import {footer,navbar} from "../footercomponents/footer.js";
document.getElementById("header").innerHTML=navbar();
let account=JSON.parse(localStorage.getItem("userAccount"))

let personName = document.getElementById("personName");
personName.innerHTML = account.firstName+" "+account.lastName;

let personEmail = document.getElementById("personEmail");
personEmail.innerHTML = account.email;



document.getElementById("footer").innerHTML=footer();
