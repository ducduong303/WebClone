var all = {
    init: function () {
        this.carousel();
        this.carousel2();
        this.carousel3();
        this.toggleMenu();
        this.fixedMenu();
        this.lightbox();
        this.modal();
        this.priceTab();
        this.load()
    },

    /** Hàm Load */
    load: function () {
        const loading = document.querySelector('.loading');
        setTimeout(() => {
            loading.classList.add('none')
        }, 2500)
    },
    /** Click toggle */
    toggleMenu: function () {
        const bar = document.querySelector('.header__bar');
        const nav = document.querySelector('.header__menu');
        bar.addEventListener('click', () => {
            nav.classList.toggle('active')

        })
    },
    /** Fix menu */
    fixedMenu: function () {
        const top = document.querySelector('.ontop')
        const header = document.querySelector('.header');
        window.addEventListener('scroll', function () {
            if (this.window.scrollY > 100) {
                header.classList.add('fixeds')
                top.classList.add('opacity')
            } else {
                header.classList.remove('fixeds')
                top.classList.remove('opacity')
            }
        })
    },

    /** Modal */
    modal: function () {

        const open = document.querySelectorAll('.watch');
        const close = document.querySelectorAll('.banner__closemodal');
        const modal = document.querySelectorAll('.banner__modal');

        for (let i = 0; i < open.length; i++) {
            open[i].addEventListener('click', () => {
                for (let i = 0; i < modal.length; i++) {
                    modal[i].classList.add("openmodal")
                }
                for (let i = 0; i < close.length; i++) {
                    close[i].addEventListener('click', () => {
                        modal[i].classList.remove("openmodal")

                    })
                }
            })
        }
    },

    /** Tab */
    priceTab: function () {
        const btn = document.querySelectorAll(".btn-price");
        const tab = document.querySelectorAll(".price__tab-item");

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', () => {
                for (let i = 0; i < tab.length; i++) {
                    btn[i].classList.remove('btn-active')
                    tab[i].classList.remove('price__tab-visible')
                }
                tab[i].classList.add('price__tab-visible');
                btn[i].classList.add('btn-active')

            })
        }

    },
    /** Slide owl Carousel */
    carousel: function () {
        $(document).ready(function () {
            $('.banner__list').owlCarousel({
                animateIn: 'slideInDown',
                animateOut: 'slideOutDown',
                loop: true,
                nav: true,
                dots: false,
                smartSpeed: 5000, // tốc độ chạy slide
                mouseDrag: false, // kéo chuột
                autoplay: true,
                navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })

        });
    },
    /** Slide owl Carousel */
    carousel2: function () {
        $(document).ready(function () {
            $('.about__slide-item').owlCarousel({
                loop: true,
                nav: false,
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
                        items: 1
                    }
                }
            })

        });
    },
    /** Slide owl Carousel */
    carousel3: function () {
        $(document).ready(function () {
            $('.team__slide-box').owlCarousel({
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
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                }
            })

        });
    },

    /** LightBox */
    lightbox: function () {
        const boxItem = document.querySelector('.portfolio__box').children;
        const lightboxContainer = document.querySelector('.portfolio__lightbox');
        const lightboxImg = document.querySelector('.lightbox-image');
      
        const counter = document.querySelector('.portfolio__lightbox-counter');
        const prev = document.querySelector('.portfolio__lightbox-prev');
        const next = document.querySelector('.portfolio__lightbox-next');
        const arowLeft = document.querySelector('.arowLeft')
        const arowRight = document.querySelector('.arowRight')
        let index;
        let imgSrc;
      
        

        // Toggle LightBox
        for (let i = 0; i < boxItem.length; i++) {
            boxItem[i].querySelector('.portfolio__icon').addEventListener('click', () => {
                index = i;
              
                
                changeImg()
                lightbox();
            })
        }
        function lightbox() {
            lightboxContainer.classList.toggle('open')
        }
        function changeImg() {
            imgSrc = boxItem[index].querySelector("img").getAttribute('src');        
            lightboxImg.src = imgSrc;
            counter.innerHTML = (index + 1) + " of " + boxItem.length;

        }
        // Xác định sự kiện remove
        lightboxContainer.addEventListener('click', () => {
            if (event.target !== arowLeft && event.target !== arowRight && event.target !== next && event.target !== prev) {
                lightbox()
            }
        })

        // Next and Prev
        prev.addEventListener('click', () => {
            if (index == 0) {
                index = boxItem.length - 1
            }
            else {
                index--
            }
            changeImg();
        })
        next.addEventListener('click', () => {
            if (index == boxItem.length - 1) {
                index = 0;
            } else {
                index++;
            }
            changeImg();
        })
    }
}
all.init();


