function logar() {
    const login = form.login().value;
    const senha = form.password().value;
    showLoading();
    
    if(login == "adm@1.adm" && senha == "adminreserva") {
        firebase.auth().signInWithEmailAndPassword(form.login().value, form.password().value).then(response => {
            hideLoading();
            window.location.href = "./assets/pages/home-admin.html";
        }).catch(error => {
            hideLoading();
            alert(getErrorMessage(error));
        });
    } else {
        firebase.auth().signInWithEmailAndPassword(form.login().value, form.password().value).then(response => {
            window.location.href = "./assets/pages/home-morador.html";
        }).catch(error => {
            alert(getErrorMessage(error));
        });
    }
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado";
    } else if (error.code == "auth/wrong-password") {
        return "Senha incorreta";
    }
    return error.message;
}