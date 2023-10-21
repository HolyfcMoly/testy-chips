import MainSlider from "./modules/slider"

window.addEventListener('DOMContentLoaded', () => {
    new MainSlider('.swiper', '.swiper-button-next', '.swiper-button-prev', '.swiper-pagination').init()
})