const tabs = document.querySelectorAll(".navbar__list-item");

tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        document
            .querySelector(".navbar__list-item.active")
            .classList.remove("active");
        tab.classList.add("active");
    });
});
