import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective {

  @Input() grados = 0;
  @Input() step = 0;
  key = '';
  shift = false;

  constructor(private el: ElementRef) {
    
   }

   @HostListener('click')
   click() {
    if (this.el.nativeElement.tagName === 'IMG') {
      if (this.shift){
        this.grados -= this.step;
      } else {
        this.grados += this.step;
      }
      this.girar();
    }
   }

   @HostListener('document:keydown.shift')
     handleShiftKeyDown() {
     if (this.el.nativeElement.tagName === 'IMG') {
       this.shift = true;
     }
   }

   @HostListener('document:keyup.shift')
    handleShiftKeyUp() {
    if (this.el.nativeElement.tagName === 'IMG') {
      this.shift = false;
    }
   }
    
   ngOnInit(){
    this.girar();
   }

   girar(){
    if (this.el.nativeElement.tagName === 'IMG') {
      this.el.nativeElement.style.transform = "rotate(" + this.grados + "deg)";
    }
   }

}
