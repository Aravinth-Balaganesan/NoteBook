import {AfterContentChecked, Directive, ElementRef, Input,} from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective implements AfterContentChecked {

  @Input('appFocus')
  focused: boolean = false;

  constructor(public element: ElementRef<HTMLElement>) {
  }

  ngAfterContentChecked(): void {
    if (this.focused) {
      setTimeout(() => this.element.nativeElement.focus(), 0);
    }
  }
}