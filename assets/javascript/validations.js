function validateLogin(login) {
    return /\S+@\S+\.\S+/.test(login);
}