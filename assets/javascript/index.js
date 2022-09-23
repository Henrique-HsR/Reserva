const form = {
    login: () => document.getElementById('ilogin'),
    loginRequiredError: () => document.getElementById('login-error'),
    loginInvalidError: () => document.getElementById('login-invalid-error'),
    loginButton: () => document.getElementById('btn-login'),
    password: () => document.getElementById('isenha'),
    passwordRequiredError: () => document.getElementById('password-error'),
    forgotPassword: () => document.getElementById('forgot-pass')
}

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

    return validateLogin(login);
}

function isPasswordValid () {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

function forgotPass() {
    location.href = "./assets/pages/cadastro.html";
}

function toggleLoginErros () {
    const login = form.login().value;
    form.loginRequiredError().style.display = login ? "none" : "block";

    form.loginInvalidError().style.display = validateLogin(login) ? "none" : "block";
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
