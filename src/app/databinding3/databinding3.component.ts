import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding3',
  templateUrl: './databinding3.component.html',
  styleUrls: ['./databinding3.component.css']
})
export class Databinding3Component {
     public name:any="Valishali";
     public text="http://www.google.com";
     Event(){
      console.log("Hiii");
     }
     public fname:any;
 }
