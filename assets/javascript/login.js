function logar() {
    const login = form.login().value;
    const senha = form.password().value;
    showLoading();
    
    if(login == usersLogin.u1() && senha == usersPassword.u1()) {
            hideLoading();
            window.location.href = "./assets/pages/home-admin.html";
    } else if (login == usersLogin.u2() && senha == usersPassword.u2()) {
            hideLoading();
            window.location.href = "./assets/pages/home-morador.html";
    } else {
        hideLoading();
        alert("erro!")
    }
}