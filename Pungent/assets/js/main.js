var all = {
    init: function () {
        this.load();
        this.fixedNav();
        this.clickMenu();
        this.carousel();
        
    },
    load:function(){
        const load = document.querySelector('.load');
        setTimeout(() =>{
            load.classList.add('load-hidden')
        },3000)
    },
    fixedNav: function () {
        const header = document.querySelector('.header');
        const logo = document.querySelector('.header__logo img');
        const gotop = document.querySelector('.gotop');


        window.addEventListener('scroll', function () {
            if (this.window.scrollY > 200) {
                header.classList.add('active');
                logo.src = "./assets/image/logoscroll.png";
                gotop.classList.add('open-gotop')
            }
            else {
                header.classList.remove('active');
                logo.src = "./assets/image/logo.png";
                gotop.classList.remove('open-gotop')

            }
        })
    },
    clickMenu: function () {
        const bar = document.querySelector('.header__bar');
        const iconOpen = document.querySelector('.fa-bars');
        const iconClose = document.querySelector('.fa-times');
        const nav = document.querySelector('.header__nav-list');
        const btn_sub = document.querySelectorAll('.btn-sub');
        const header__sub = document.querySelectorAll('.header__sub');
        const icon = document.querySelectorAll('.fa-caret-down')
        bar.addEventListener('click', () => {
            nav.classList.toggle('toggle');
            iconOpen.classList.toggle('an');
            iconClose.classList.toggle('hien');
        })
        btn_sub.forEach((item, index) => {
            item.addEventListener('click', () => {
                header__sub[index].classList.toggle('visible')
                icon[index].classList.toggle('rotate');
                item.classList.toggle('color')

            })
        })
    },
    carousel: function () {
        $(document).ready(function () {
            $('.blog__slide-box').owlCarousel({
                loop: true,
                dots: true,
                smartSpeed: 1000, // tốc độ chạy slide
                mouseDrag: true, // kéo chuột
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    },
                    1200:{
                        items: 3
                    }
                }
            })

        });
    },
}
all.init()