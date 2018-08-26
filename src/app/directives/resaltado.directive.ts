import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) { 

  	console.log("Directiva llamada");
  	// el.nativeElement.style.backgroundColor = "yellow";
  }

  	@Input("appResaltado") nuevoColor:string;

	// Cuando el mouse entra y sale el subrayado amarrillo
	@HostListener("mouseenter") mouseEntro(){

		this.resaltar(this.nuevoColor || "yellow")
	}


	//Cuando sale el mouse se desactiva el color a nulo
	@HostListener("mouseleave") mouseSalio(){
		this.resaltar(null)
	}

	private resaltar(color:string){
		this.el.nativeElement.style.backgroundColor = color;

	}
}
