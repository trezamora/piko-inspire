// OVERLAY NAV MENU DRAWER
const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function () {
    if (mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed');
    } else {
        mysitenav.setAttribute('data-navstate', 'open');
    }
}

// CLOSE OVERLAY NAV DRAWER ON CLICK
const mysitenavlinks = document.querySelectorAll('.site-header .site-nav a');

for (let i = 0; i < mysitenavlinks.length; i++) {
    mysitenavlinks[i].onclick = function () {
        mysitenav.setAttribute('data-navstate', 'closed');
    };
};


// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const io_options = {
    // root: document.body,
    rootMargin: "0px 0px 0px 0px",
    threshold: ".50"
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-sectionstate", "active");
        } else {
            entry.target.setAttribute("data-sectionstate", "inactive");
        }
    });
}, io_options);
document.querySelectorAll(".animate-on-scroll").forEach((section) => {
    observer.observe(section);
});

// SWIPER JS 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 100,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

// LOTTIE READER
// SECTIONS
var animation = bodymovin.loadAnimation({
    container: document.getElementById('hero-animation'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/heroanimation.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('about-animation'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/aboutanimation.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('connect-animation'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/connectanimation.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('join-animation'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/joinanimation.json'
});

//CUSTOM GRID

var animation = bodymovin.loadAnimation({
    container: document.getElementById('pikomission'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/pikomission.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('pikovision'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/pikovision.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('pikocommunity'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/pikocommunity.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('pikofoster'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/pikofoster.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('pikocreate'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/pikocreate.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('pikoaction'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/pikoaction.json'
});

//FORM BUTTON JS
//Code By Webdevtrick(https://webdevtrick.com )

(function () {
    // $('body').addClass('hideform');

    var contactForm = {
        container: $('#storyform'),
        config: {
            effect: 'slideToggle',
            speed: 500
        },

        init: function (config) {
            $.extend(this.config, config);

            $('#formbutton').on('click', this.show);
        },

        show: function (e) {
            var cf = contactForm,
                container = cf.container,
                config = cf.config;

            e.preventDefault();
            if (container.is(':hidden')) {
                cf.close.call(container);
                container[config.effect]
                    (config.speed);
            }
        },

        close: function () {
            var $this = $('#storyform');

            if ($this.find('span.close').length) return;

            $('<span class=close>-</span>')
                .prependTo(this)
                .on('click', function () {
                    $this[contactForm.config.effect](contactForm.config.speed);
                })
        }
    };

    contactForm.init({
        effect: 'fadeToggle',
        speed: 500
    });
})();