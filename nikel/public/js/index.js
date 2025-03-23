const myModal = new bootstrap.Modal("#register-modal");
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