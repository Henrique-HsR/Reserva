function showLoading() {
    const loadings = document.getElementById('loading');
    loadings.style.display = "flex";
}

function hideLoading() {
    const loadings = document.getElementsByClassName("loading");

    if (loadings.length) {
        loadings[0].remove();
    }
}       