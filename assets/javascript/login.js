function validateFields() {
    const loginValid = isLoginValid();
    document.getElementById("forgot-pass").disabled = !loginValid;

    const passwordValid = isPasswordValid();
    document.getElementById("btn-login").disabled = !loginValid || !passwordValid;
    


    function isLoginValid () {
        const login = document.getElementById('ilogin').value;

        if (!login) {
            return false;
        }

        return true;
    }

    function isPasswordValid () {
        const password = document.getElementById('isenha').value;

        if (!password) {
            return false;
        }

        return true;
    }
}

function logar() {
    var login = document.getElementById('ilogin').value;
    var senha = document.getElementById('isenha').value;

    if (login == "admin" && senha == "admin") {
        location.href = "./assets/Pages/standard.html";
    } else {
        alert('Usuário ou senha incorretos')
    }
}

function forgotPass() {
    location.href = "./assets/Pages/cadastro.html";
}