import { Component } from '@angular/core';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrls: ['./pip.component.css']
})
export class PipComponent {
   public name:any="Vaishali";
   public date=new Date();
   public studData:any=[
    {name:"Vivan", age:7,sub:"Eng"},
   ]
   public number=0.345244;
}
