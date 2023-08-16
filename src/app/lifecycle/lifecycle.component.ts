import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {

  constructor(){
    console.log("This is constructor");
  }
  ngOnChange(){
    console.log("This is onchange");
 
  }
  ngOnInit(){
    console.log("This is ngoninit");

  }
  doCheck(){
    console.log("This is docheck");

  }
  ngAfterContentInit(){
    console.log("This is ngafterercontentinit");

  }
  ngafterContentChecked(){
    console.log("This is ngaftercontentcheck");

  }
  ngAfterViewInit(){
    console.log("This is ngafterviewinit");

  }
  ngAfterViewChecked(){
    console.log("This is checked");

  }

}
