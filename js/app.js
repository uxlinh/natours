const hero = document.querySelector(".header__hero");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();
tl.fromTo(header__hero, 1, {height: '0%'}, {height: '80%'});