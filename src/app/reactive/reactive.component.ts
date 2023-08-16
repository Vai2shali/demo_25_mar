import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveFormComponent {
  public myForm:any;
  public allData:any=[];
  public showFlag:boolean=false;
  public count:number=0;
  constructor(private fb:FormBuilder){
    this.myForm=this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      eml:['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ]],

    })
  }

  onSubmitdata(data:any){
    data.value.id=this.count;
console.log( this.myForm.value);
this.allData.push(this.myForm.value);
if(this.allData.length>0){
  this.showFlag=true;
};
this.count++;
  }
  onDelData(data:any){
    this.allData.splice(this.allData.indexOf(data),1)
   }
  onEditData(data:any){
this.myForm.setValue(data);
console.log(data);
  }
  onClickUpdateBtn(data:any){
this.allData.splice(data.value.id,1,data.value)
  }
 }





