 import { Component } from '@angular/core';
import { filter,from,map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl:'./rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
  //  public arr1:any=[6,7,8,8,8];
  //  public observable:any;
  //  constructor(){
  //   this.observable=from(this.arr1);
  //   this.observable=of(2,3,4,5,"String",this.arr1);
  //   this. observable.subscribe((res:any)=>{
  //    console.log(res);
  //   });
  //   this.observable.pipe(
  //     map((x:any)=> x+3),
  //     filter((y:any)=> y+2),
  //   ).subscribe((res:any)=>{
  //     console.log(res);
  //   });
  //   ((err:any)=>{
  //     console.log(err);
  //   })
  //   }

  
}