firebase.auth().onAuthStatusChanged( user => {
    if (!user) {
        window.location.href = "../index.html"
    }
});