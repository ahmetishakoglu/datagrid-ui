import {AfterViewChecked, Directive, ElementRef, HostBinding, Input, OnDestroy, Renderer2} from "@angular/core";
import {debounceTime, fromEvent, Subscription, throttleTime} from "rxjs";
import {DeviceDetectorService} from "ngx-device-detector";

@Directive({
  selector: '[fluidHeight]',
  standalone: true
})
export class FluidHeightDirective implements OnDestroy {
  @HostBinding('style.overflow-y') overflowY = 'auto';

  private domElement: HTMLElement;
  private resizeSub: Subscription;
  constructor(private renderer: Renderer2,
              private elementRef: ElementRef,
              private deviceService: DeviceDetectorService) {
    // get ref HTML element
    this.domElement = this.elementRef.nativeElement as HTMLElement;
    this.setHeight();

    // register on window resize event
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(throttleTime(500), debounceTime(500))
      .subscribe(() => {
        this.setHeight();
      });
  }

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }

  private setHeight() {
    const windowHeight = window?.innerHeight;
    let height = windowHeight - 135;

    if ((this.deviceService.isMobile() && window?.innerWidth < 737) || window?.innerWidth < 737) {
      this.renderer.setStyle(this.domElement, 'height', `auto`);
    } else {
      this.renderer.setStyle(this.domElement, 'height', `${height}px`);
    }
  }
}
