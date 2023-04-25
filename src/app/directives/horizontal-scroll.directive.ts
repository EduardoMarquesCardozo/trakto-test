import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]',
})
export class HorizontalScrollDirective {
  isDown = false;
  startX: number = 0;
  scrollLeft : number = 0;
  private slider = this._elemRef.nativeElement

  constructor(private _elemRef: ElementRef, private _renderer: Renderer2) {}

  @HostListener('wheel', ['$event'])
  public onScroll(event: WheelEvent) {
    this._elemRef.nativeElement.scrollLeft += event.deltaY;
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('mousedown', ['$event'])
  public onDown(event: MouseEvent) {
    this.isDown = true;
    this.slider.classList.add('active');
    this.startX = event.pageX - this.slider.offsetLeft;
    this.scrollLeft = this.slider.scrollLeft;
  }

  @HostListener('mouseleave', ['$event'])
  public onLeave() {
    this.isDown = false;
    this.slider.classList.remove('active');
  }

  @HostListener('mouseup', ['$event'])
  public onUp() {
    this.isDown = false;
    this.slider.classList.remove('active');
  }

  @HostListener('mousemove', ['$event'])
  public onMove(event: MouseEvent) {
    if(!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - this.slider.offsetLeft;
    const walk = (x - this.startX) * 3;
    this.slider.scrollLeft = this.scrollLeft - walk;
  }
}