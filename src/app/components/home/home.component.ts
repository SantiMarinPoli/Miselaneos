// Son los paquetes del ciclo de vida o lifeCycle Hook
import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <app-ng-style></app-ng-style>

      <app-css></app-css>

      <app-clases></app-clases>

      <p [appResaltado]="'orange'">Hola Angular</p> 

      <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit,OnChanges
            ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log("1. ngOnInit");
  }

  ngOnChanges(){
    console.log("2. ngOnChanges");
  }
  ngDoCheck(){
    console.log("3. ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("4. ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("5. ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("6. ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("7. ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("8. ngOnDestroy");
  }

}
