let loggedins = 0;
let currentUNames = "";

let usernameList = [
    "julsalim",
    "janettempt",
    "admin",
    "amingGantengz"
];

let passwordList = [
    "julius123",
    "janette123",
    "admin",
    "banget"
]

function verify() {
    let userInput = document.getElementById("username-login").value;
    let passInput = document.getElementById("password-login").value;
    let valid = 1;
    for (let i = 0; i < usernameList.length; i++) {
        if (userInput === usernameList[i]) {
            if (passInput === passwordList[i]) {
                loggedins = 1;
                currentUNames = usernameList[i];
                sessionStorage.setItem("uname", currentUNames);
                sessionStorage.setItem("status", loggedins);
                alert("Successfully login\nYou will redirected to home page");
                window.location.href = "./home.html";
                valid = 1;
                break;
            }
            else {
                valid = 0;
            }
        }
        else {
            valid = -1;
        }
    }
    if (valid == 0) {
        alert("Invalid Password");
    }
    else if (valid == -1) {
        alert("Invalid Username!");
    }
}


