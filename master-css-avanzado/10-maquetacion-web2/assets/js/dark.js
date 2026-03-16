document.addEventListener("DOMContentLoaded", () => {
    let switcher = document.querySelector(".switcher__btn");
    let light = document.querySelector(".switcher__icon-light");
    let dark = document.querySelector(".switcher__icon-dark");

    let icon_dark = document.querySelector(".menu-mobile__link-logo--dark");
    let icon_light = document.querySelector(".menu-mobile__link-logo--light");

    let icon_dark2 = document.querySelector(".navbar__link-logo--dark");
    let icon_light2 = document.querySelector(".navbar__link-logo--light");


    switcher.addEventListener("click", () => {
        let head = document.head;

        let link = document.createElement("link");

        let logo = document.querySelector("menu-mobile__logo");


        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./assets/css/dark.css";
        link.id = "theme-dark";

        let theme_dark = document.querySelector("#theme-dark");
        if (theme_dark) {
            head.removeChild(theme_dark);

            light.style.display = "block";
            dark.style.display = "none";

            icon_dark.style.display = "none";
            icon_light.style.display = "inline-block";

            icon_dark2.style.display = "none";
            icon_light2.style.display = "inline-block";

        } else {
            head.appendChild(link);
            light.style.display = "none";
            dark.style.display = "block";

            icon_dark.style.display = "inline-block";
            icon_light.style.display = "none";

            icon_dark2.style.display = "inline-block";
            icon_light2.style.display = "none";

        }

    });
});