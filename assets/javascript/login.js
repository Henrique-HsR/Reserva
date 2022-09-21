function onChangeLogin() {
    toggleButtonsDisabled();
    toggleLoginErros();
}

function onChangePassword() {
    toggleButtonsDisabled();
    togglePasswordErros();
}


function isLoginValid () {
    const login = form.login().value;

    if (!login) {
        return false;
    }

    return true;
}

function isPasswordValid () {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}


function logar() {
    var login = form.login().value;
    var senha = form.password().value;

    if (login == "admin" && senha == "admin") {
        location.href = "./assets/Pages/standard.html";
    } else {
        alert('Usuário ou senha incorretos')
    }
}

function forgotPass() {
    location.href = "./assets/Pages/cadastro.html";
}

function toggleLoginErros () {
    const login = form.login().value;
    form.loginRequiredError().style.display = login ? "none" : "block";
}

function togglePasswordErros() {
    const password = document.getElementById('isenha').value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisabled () {
    const loginValid = isLoginValid();
    form.forgotPassword().disabled = !loginValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !loginValid || !passwordValid;
}

const form = {
    login: () => document.getElementById('ilogin'),
    loginRequiredError: () => document.getElementById('login-error'),
    loginButton: () => document.getElementById('btn-login'),
    password: () => document.getElementById('isenha'),
    passwordRequiredError: () => document.getElementById('password-error'),
    forgotPassword: () => document.getElementById('forgot-pass')
}