import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {
  @HostBinding('class.show') isOpen = false;
  menu: any;

  // tslint:disable-next-line:typedef
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    this.toggleMenuOpen();
  }

  constructor(private el: ElementRef, private renderer: Renderer2, private elRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.menu = this.el.nativeElement.querySelector('.dropdown-menu');
  }

  toggleMenuOpen(): void {
    if (this.isOpen) {
      this.renderer.addClass(this.menu, 'show');
    } else {
      this.renderer.removeClass(this.menu, 'show');
    }
  }

}
