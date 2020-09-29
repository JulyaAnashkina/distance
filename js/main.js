const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');
const mainFeed = document.querySelector('body');

const radioButtons = document.querySelectorAll('.radio-button');
const fanpageGroup = [
    document.querySelector('.fanpage-likes'),
    document.querySelector('.fanpage-views'),
    document.querySelector('.fanpage-posts')
];

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    mainFeed.classList.toggle('no-scroll');
});

radioButtons.forEach((radio, i) => radio.addEventListener('click', () => {
    fanpageGroup.forEach(fanpage => {
        fanpage.classList.remove('active');
    });
    fanpageGroup[i].classList.add('active');
}));
