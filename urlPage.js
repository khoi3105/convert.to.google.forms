const linkTabs = document.querySelectorAll(".navbar__item-link");

linkTabs.forEach((linkTab) => {
    linkTab.addEventListener("click", (e) => {
        const { href } = e.target;
        const newHref = href.split("/").splice(3).join("/");
        e.target.href = newHref;
    });
});
