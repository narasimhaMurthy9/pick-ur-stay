import { AfterContentInit, AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { map, distinctUntilChanged, Observable } from 'rxjs';
@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements AfterViewInit, OnInit{
  @Output() appIntersectionObserver = new EventEmitter<boolean>();
  constructor(
    private el: ElementRef
  ) {
  }
  ngOnInit(): void {
     
       
  }
  ngAfterViewInit(): void {
    this.createIntersectionObserver(this.el)
      .pipe(
        map((entry: any)=> entry.isIntersecting), // returns the isIntersecting value from the entry object
        distinctUntilChanged() // it sends only distinct values
      )
      .subscribe((isIntersecting : boolean)=>{
        if(isIntersecting){
          this.appIntersectionObserver.emit(isIntersecting); // emits the isIntersecting value only if it is true
        }
      }
      );
  }
  createIntersectionObserver(el: ElementRef) {
    return new Observable(ob => {
      // creates an IntersectionObserver instance with a call back method
      const intersectionObs = new IntersectionObserver(entries=>{
      
        ob.next(entries[0]); // sends the 1st entry object to the observer
      });
      intersectionObs.observe(el.nativeElement); // makes the intersectionObs to observe the html element
      return ()=> {
        intersectionObs.disconnect(); // to temporarily unsubscribe the IntersectionObserver
      };
    });
  }
}