$(document).ready(function () {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const toggler = document.querySelector(".ToggleMenuButton");
    const menu = document.querySelector(".HeaderMenu");

    toggler.addEventListener("click", () => {
        body.classList.toggle("active");
        toggler.classList.toggle("active");
        menu.classList.toggle("active");
    });

    const modalWrapper = document.querySelector(".ModalWrapper");
    const btnInquire = document.querySelector(".btn_inquire");
    const btnInquireClose = document.querySelector(".js-close-modal");
    const filter = document.querySelector(".filter");

    btnInquire.addEventListener("click", (e) => {
        e.stopPropagation();
        modalWrapper.classList.add("active");
        html.classList.add("active");
        body.classList.add("active");
    });

    btnInquireClose.addEventListener("click", () => {
        modalWrapper.classList.remove("active");
        html.classList.remove("active");
        body.classList.remove("active");
    });

    filter.addEventListener("click", () => {
        if (modalWrapper.classList.contains("active")) {
            modalWrapper.classList.remove("active");
            html.classList.remove("active");
        body.classList.remove("active");

        }
    });

    const agreeView = document.querySelector(".js-agree-open");
    const agreeContent = document.querySelector(".agreementView");

    agreeView.addEventListener("click", () => {
        agreeView.classList.toggle("active");
        agreeContent.classList.toggle("active");
    });

    $(window).scroll(function () {
        $(".js-fadein").each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).addClass("active");
            }
        });
    });

    // $(".js-fadein-2").addClass("active");

    var mobile_show = false;
    $(window).bind("resize", function () {
        mobile_show = false;
        $("menu .ModalWrapper, body").removeClass("active");
    });

    // tab
    const tabList = document.querySelectorAll(".js-tab li");
    const contents = document.querySelectorAll(".tab_content");
    let activeCont = ""; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

    for (var i = 0; i < tabList.length; i++) {
        tabList[i].querySelector("a").addEventListener("click", function (e) {
            e.preventDefault();
            for (var j = 0; j < tabList.length; j++) {
                // 나머지 버튼 클래스 제거
                tabList[j].classList.remove("active");

                // 나머지 컨텐츠 display:none 처리
                contents[j].classList.remove("active");
            }

            // 버튼 관련 이벤트
            this.parentNode.classList.add("active");

            // 버튼 클릭시 컨텐츠 전환
            activeCont = this.getAttribute("href");
            document.querySelector(activeCont).classList.add("active");
        });
    }

    const tabList2 = document.querySelectorAll(".js-tab-ver02 li");
    for (var i = 0; i < tabList2.length; i++) {
        tabList2[i].querySelector("a").addEventListener("click", function (e) {
            e.preventDefault();
            for (var j = 0; j < tabList2.length; j++) {
                // 나머지 버튼 클래스 제거
                tabList2[j].classList.remove("active");
            }
            this.parentNode.classList.add("active");
        });
    }
    


    $(function () {
        if (location.hash == "#muscat") {
        } else if (location.hash == "#muscatPeople") {
            $(".tab_list").find("li.active").removeClass("active");
            $(".tab_list").find("li").eq(1).addClass("active");
            $(".tab_content").removeClass("active");
            $("#muscatPeople").addClass("active");
        }
    });

    $(".list_project").slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick",
            },
        ],
    });

    $(window).on("resize", function () {
        $(".list_project").slick("resize");
    });

    // const itemTab = document.querySelector('.js-tab-filter');
    // const items = document.querySelector('.js-list-filter');
    // const item = document.querySelectorAll('.js-list-filter li');

    // itemTab.addEventListener('click', (e) => {
    //   const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    //   if (filter == null) {
    //     return;
    //   }
    //   item.forEach((item) => {
    //     if (filter === '*' || filter === item.dataset.type) {
    //       item.style.display = "block"
    //     } else {
    //       item.style.display = "none"
    //     }
    //   });
    // });
});
