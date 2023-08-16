import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-obs-por',
  templateUrl: './obs-por.component.html',
  styleUrls: ['./obs-por.component.css']
})
export class ObsPorComponent {
  // constructor(){}
  //  ngOnInit(){
  //   const obs = new Observable((res:any)=>{
  //     console.log("Hello");
  //     res.next('obs 1');
  //     res.next('obs 2');
  //     res.next('obs 3');
  //     res.next('obs 4');


  //   });
  //   obs.pipe(
  //     filter((x=> x == 'obs 3'))
  //   )
  //   .subscribe((res:any)=>{
  //     console.log(res);
  //   })

  //   //promise
  //   const promise = new Promise((res:any)=>{
  //     console.log("Vaishali")
  //     res('promise 1')
  //     res('promise 2')
  //     res('promise 3')
  //     res('promise 4')

  //   });
  //   promise.then((res:any)=>{
  //     console.log(res)
  //   })
  //  }

      constructor(){

     }
     ngOnInit(){
      const obs=new Observable((res:any)=>{
        console.log("Hello");
        res.next('obs 1');
        res.next('obs 2');
        res.next('obs 3');
        res.next('obs 4');

      })
      obs.pipe(
        filter((x=> x == 'obs 3'))
      )
      .subscribe((res:any)=>{
        console.log(res);
      })

      //promises
      const promise=new Promise((res:any)=>{
        console.log("Vaishali");
        res('promise 1');
        res('promise 2');
        res('promise 3');
        res('promise 4');

      });
      promise.then((res:any)=>{
        console.log(res);
      })
    }
  }
   
  
 