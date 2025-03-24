const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();
//LOGIN
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const session = document.getElementById("session-check").checked;

    const acc = getAccount(email);
    if(!acc){
        const noEmail = document.getElementById("noEmail");
        noEmail.innerText = "Usuário ou senha incorretos.";
        return;
    }

    if(acc){
        if(acc.password !== password){
            const noPass = document.getElementById("noPass");
            noPass.innerText =  "Usuário ou senha incorretos.";
            return;
        }

        saveSession(email, saveSession);
        window.location.href = "home.html";

    }

})
//SIGNUP
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    saveAccount({
        login : email,
        password : password,
        transactions : []
    });

    myModal.hide();
    alert("conta criada.");
});

function saveAccount(data){
    localStorage.setItem(data.login,JSON.stringify(data));
    console.log("foi");
}
function getAccount(k){
    const acc = localStorage.getItem(k);

    if(acc){
        return JSON.parse(acc);
    }

    return "";
}
function saveSession(data,saveSession){
    if(saveSession){
        localStorage.setItem("session",data);
    }

    sessionStorage.setItem("logged", data);
}
function checkLogged(){
    if(session){
        sessionStorage.setItem("logged",session);
        logged = session;
    }
    if(logged){
        saveSession(logged, session);
        window.location.href = "home.html";
    }
}