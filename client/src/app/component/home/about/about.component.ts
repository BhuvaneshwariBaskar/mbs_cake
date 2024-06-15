import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const imageContainer = document.getElementById('imageContainer');
    const textContainer = document.getElementById('textContainer');
    if (imageContainer && this.isElementInViewport(imageContainer)) {
      imageContainer.classList.add(
        'animate__animated',
        'animate__fadeInLeft',
        'block'
      );
      imageContainer.classList.remove('hidden');
    }
    if (textContainer && this.isElementInViewport(textContainer)) {
      textContainer.classList.add(
        'animate__animated',
        'animate__fadeInRight',
        'block'
      );
      textContainer.classList.remove('hidden');
    }
  }

  isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
