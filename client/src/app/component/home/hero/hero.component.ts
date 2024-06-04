import { Component, AfterViewInit } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      // Swiper options
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000, // 3 seconds delay between slides
        disableOnInteraction: false, // Autoplay won't be disabled after interactions
      },
    });
  }
}
