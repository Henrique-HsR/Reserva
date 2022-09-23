function showLoading() {
    const loadings = document.getElementById('loading');
    loadings.style.display = "flex";
    
    setTimeout(() => hideLoading(), 3000)
}

function hideLoading() {
    const loadings = document.getElementById('loading');
    loadings.style.display = "none";
}       