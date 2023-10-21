export default class MainSlider {
    constructor(slider, nextBtn, prevBtn, pagination) {
        this.slider = document.querySelector(slider);
        this.next = document.querySelector(nextBtn);
        this.prev = document.querySelector(prevBtn);
        this.dots = document.querySelector(pagination)
    }

    init() {
        return new Swiper(this.slider, {
            pagination: {
                el: this.dots,
                clickable: true,
            },
            navigation: {
                nextEl: this.next,
                prevEl: this.prev,
            },
            
        })
    }
}