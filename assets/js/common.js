$(document).ready(function () {
    const body = document.querySelector("body");
    const toggler = document.querySelector(".ToggleMenuButton");
    const menu = document.querySelector(".HeaderMenu");

    toggler.addEventListener("click", () => {
        body.classList.toggle("onMenu");
        toggler.classList.toggle("active");
        menu.classList.toggle("active");
    });

    const modalWrapper = document.querySelector(".ModalWrapper");
    const btnInquire = document.querySelector(".btn_contact");
    const btnInquireClose = document.querySelector(".js-close-modal");
    const filter = document.querySelector(".filter");

    btnInquire.addEventListener("click", () => {
        modalWrapper.classList.add("active");
        body.classList.add("onMenu");
    });

    btnInquireClose.addEventListener("click", () => {
        modalWrapper.classList.remove("active");
        body.classList.remove("onMenu");
    });

    filter.addEventListener("click", () => {
        if (modalWrapper.classList.contains("active")) {
            modalWrapper.classList.remove("active");
            body.classList.remove("onMenu");
        }
    });

    const agreeView = document.querySelector(".js-agree-open");
    const agreeContent = document.querySelector(".agreementView");

    agreeView.addEventListener("click", () => {
        agreeContent.classList.toggle("active");
    });

    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }

    $(window).scroll(function () {
        $(".js-fadein").each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).addClass("active");
            }
        });
    });

    var mobile_show = false;
    $(window).bind("resize", function () {
        mobile_show = false;
        $(".gnb_mobile, .overlay, body").removeClass("active");
    });

    //새소식 tab 이동
    $(".tab_depth01 > li > p:first-child > a").on("click", function (e) {
        e.preventDefault();
    });
    $(".tab_depth01 > li > p:first-child > a").on("mouseenter focus", function () {
        var subList = $(this).parent().next();
        siblingsList = $(".tab_depth02");

        siblingsList.hide();
        subList.show();
        $(this).parent().parent().siblings().removeClass("active");
        $(this).parents("li").addClass("active");
    });

    // tab

    $(".tab_lecture > li > p > a").bind("click", function (e) {
        e.preventDefault();

        if ($(this).parents("li").siblings().hasClass("active") == true) {
            $(this).parents("li").siblings().removeClass("active");
            $(this).parents("li").addClass("active");
        }
    });
});
