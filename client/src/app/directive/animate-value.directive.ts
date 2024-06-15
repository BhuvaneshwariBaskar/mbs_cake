import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAnimateValue]',
})
export class AnimateValueDirective implements OnInit {
  @Input('endValue') endValue!: number;
  @Input() duration: number = 5000;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.createObserver();
  }

  createObserver() {
    const options = {
      root: null, // relative to the viewport
      threshold: 0.1, // 10% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateValue(0, this.endValue, this.duration);
          this.observer.unobserve(this.el.nativeElement); // stop observing after animation starts
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  animateValue(start: number, end: number, duration: number) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      this.el.nativeElement.innerHTML = Math.floor(
        progress * (end - start) + start
      );
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
