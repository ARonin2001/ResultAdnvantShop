let catalogBurger = document.querySelector('.header__catalog-btn'),
    catalogNav = document.querySelector('.header__catalog-nav');

catalogBurger.addEventListener('click', function() {
    if(catalogNav.style.height === "100%") {
        for (let i = 100; i != -1; i--) {
            console.log("s");
            catalogNav.style.height = i + "%";
        }
        catalogNav.style.border = "none";
        return;
    }

    catalogNav.style.border = "1px solid #efeff4;";
    for (let i = 1; i <= 100; i++) {
        catalogNav.style.height = i + "%";
    }
});