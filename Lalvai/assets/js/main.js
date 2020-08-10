var all = {
    init: function () {
        this.load();
        this.mess();
        this.scrollNav();
        this.clickNav();
        this.carosel();
        this.lightBox();
        this.carosel2();

    },
    load: function () {
        const load = document.querySelector('.load');
        setTimeout(() => {
            load.classList.add('load-hidden')
        }, 3000)
    },
    mess:function(){
        const btn = document.querySelector('.btn-mess');
        btn.addEventListener('click',()=>{
            alert('Sorry Chức Năng Chưa Hoàn Thiện')
        })
    },
    scrollNav: function () {
        const header = document.querySelector('.header');
        const logo = document.querySelector('.header__logo');
        const gotop = document.querySelector('.gotop');
        window.addEventListener('scroll', function () {
            if (this.window.scrollY > 200) {
                header.classList.add('active');
                logo.src = "./assets/image/logo-two.png";
                gotop.classList.add('open-gotop')
            }
            else {
                header.classList.remove('active');
                logo.src = "./assets/image/logo.png";
                gotop.classList.remove('open-gotop')
            }
        })
    },
    clickNav: function () {
        const nav = document.querySelector('.header__nav')
        const open = document.querySelector('.fa-bars');
        const close = document.querySelector('.fa-times-circle')
        open.addEventListener('click', () => {
            nav.classList.toggle('open');
            open.classList.add('none');
            close.classList.add('block')
        })
        close.addEventListener('click', () => {
            nav.classList.toggle('open');
            open.classList.remove('none');
            close.classList.remove('block')
        })
    },
    carosel: function () {
        $(document).ready(function () {
            $('.portfolio__slide-box').owlCarousel({
                loop: false,
                dots: true,
                smartSpeed: 1000, // tốc độ chạy slide
                mouseDrag: true, // kéo chuột
                autoplay: true,
                responsive: {

                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                }
            })

        });
    },
    lightBox: function () {
        const lightboxContainer = document.querySelector('.portfolio__lightbox');
        const lightboxImg = document.querySelector('.lightbox-image');
        const counter = document.querySelector('.portfolio__lightbox-counter');
        const prev = document.querySelector('.portfolio__lightbox-prev');
        const next = document.querySelector('.portfolio__lightbox-next');
        const arowLeft = document.querySelector('.arowLeft')
        const arowRight = document.querySelector('.arowRight')
        let i;
        // Image
        const image = document.querySelectorAll('.portfolio__slide-image img');
        // Button
        const btn = document.querySelectorAll('.portfolio__slide-icon a');
        btn.forEach((item, index) => {
            item.addEventListener('click', () => {
                i = index;
                // lightboxImg.src = image[index].src;
                // counter.innerHTML = (index + 1) + " of " +image.length;
                changeImg();
                lightbox();
            })
        })
        function changeImg() {
            lightboxImg.src = image[i].src;
            counter.innerHTML = (i + 1) + " of " + image.length;
        }
        function lightbox() {
            lightboxContainer.classList.toggle('open')
        }
        // Xác định sự kiện remove
        lightboxContainer.addEventListener('click', () => {
            if (event.target !== arowLeft && event.target !== arowRight && event.target !== next && event.target !== prev && event.target !== lightboxImg) {
                lightbox()
            }
        })
        // Click img Change img
        lightboxImg.addEventListener('click', () => {
            if (i == 0) {
                i = image.length - 1
            }
            else {
                i--
            }
            changeImg();
        })
        // Next and Prev light box
        prev.addEventListener('click', () => {
            if (i == 0) {
                i = image.length - 1
            }
            else {
                i--
            }
            changeImg();
        })
        next.addEventListener('click', () => {
            if (i == image.length - 1) {
                i = 0;
            } else {
                i++;
            }
            changeImg();
        })

    },
    carosel2: function () {
        $(document).ready(function () {
            $('.testimonial__slide-box').owlCarousel({
                loop: true,
                dots: true,
                smartSpeed: 1000, // tốc độ chạy slide
                mouseDrag: true, // kéo chuột
                autoplay: false,
                responsive: {

                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                }
            })

        });
    },

}
all.init();