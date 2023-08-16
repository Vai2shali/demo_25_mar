import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  public shoeText:any="Hiiiiiiiiiii";
  public showFlag:boolean=true;
  public age:number=19;
  public country:any=['India',"Chaina","Mp","UP","Bihar"];
  public state="KA";
   public testClass1:any;
   public testStyle1:any;
   testClass2:any={'background-color':'black'};
   testClass3:any={'background-color':'violet'};
   constructor(){
   if (this.age !&& this.showFlag){
    this.testClass1="test1";
    this.testStyle1={'color':'yellow'};
   }else{
    this.testClass1="test2";
    this.testStyle1={'color':'orange'};
   }
     

    }


}           