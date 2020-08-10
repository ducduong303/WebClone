var all = {
    init: function () {
        this.load();
        this.changeBackground();
        this.scroll();
        this.clickNav();
        this.play();

    },
    load:function(){
        const load = document.querySelector('.load');
        setTimeout(()=>{
            load.classList.add('loading');
        },3000)
    },
    changeBackground: function () {
        var video = [
            "./assets/videos/video-1.mp4",
            "./assets/videos/video-2.mp4",
            "./assets/videos/video-3.mp4",
            "./assets/videos/video-4.mp4",
        ]
        const btn = document.querySelectorAll(".banner__image li img");
        btn.forEach((item, index) => {
            item.addEventListener('click', () => {

                document.querySelector('.banner__video').src = video[index];
                for (let i = 0; i < btn.length; i++) {
                    btn[i].classList.remove('boder');
                }
                btn[index].classList.add('boder');
            })
        })
    },
    scroll:function(){
        const header = document.querySelector('.header');
        const gotop = document.querySelector('.gotop');
        window.addEventListener('scroll', function () {
            if (this.window.scrollY > 200) {
                header.classList.add('active');
                gotop.classList.add('open-gotop')
            }
            else {
                header.classList.remove('active');       
                gotop.classList.remove('open-gotop')
            }
        })
    },
    clickNav: function () {
        const bar = document.querySelector(".header__bar");
        const nav = document.querySelector('.header__nav');
        bar.addEventListener('click', () => {
            nav.classList.toggle('open')
        })
    },
    play:function(){
        const btn = document.querySelector('.btn-music');
        const audio = document.querySelector('audio');
        let check = 0;
        btn.addEventListener('click', () => {
            if (check == 0) {
                audio.play();
                check = 1;
            }
            else {
                audio.pause();
                check = 0;
            }
        })
    }
}
all.init();