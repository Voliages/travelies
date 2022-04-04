let loggedin = sessionStorage.getItem("status");
let currentUName = sessionStorage.getItem("uname");

console.log(loggedin);

function checkLoginStat() {
    
    if (loggedin == 1) {
        let loginButton = document.getElementById("menu-nav-button-login");

        loginButton.style.backgroundColor = "#FFFFFF";
        loginButton.style.fontSize = "19px";
        loginButton.innerHTML = "Hello, "+ currentUName + ".";
        
        
    }
}

let displayed = 0;

function loginMenuclick() {
    if (loggedin == 1) {
        if (displayed == 0) {
            document.getElementById("popup-login").style.display="block";
            displayed = 1;
        }
        else if (displayed == 1) {
            document.getElementById("popup-login").style.display="none";
            displayed = 0;
        }
    }
    else {
        window.location.href ="./login.html";
    }
}

function loginHover() {
    if (loggedin == 1) {
        let loginButton = document.getElementById("menu-nav-button-login");
        loginButton.style.textDecoration = "underline";
    }
}
function loginLeave() {
    if (loggedin == 1) {
        let loginButton = document.getElementById("menu-nav-button-login");
        loginButton.style.textDecoration = "none";
    }
}