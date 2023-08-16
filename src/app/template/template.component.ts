import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public idd:any;
  public un:any;
  public em:any;
  public ps:any;
  public allData:any=[];
  public count:number=1;
  public showFlag:boolean=false;

  onSubmitdata(data:any){
console.log(data.value);
if(data.value.id===undefined){
  data.value.id=this.count;
  this.allData.push(data.value);
  if(this.allData.length>0){
    this.showFlag=true;
  };
  this.count++;
}else{
  this.allData.forEach((element:any)=>{
    if(data.value.id=element.id){
      console.log(element);
      element.uname=data.value.uname;
      element.eml=data.value.eml;
      element.pass=data.value.pass;

    }
  });
  console.log(this.allData);

}

   }
  onDeldata(data:any){
  console.log(data);
  console.log(this.allData);
  this.allData.forEach((element:any,index:any)=>{
    if(element.id=data.id){
      this.allData.splice(index,1);
    }
  })
   }
   onUpdataeData(dt1:any){
 console.log(dt1);
 this.idd=dt1.id;
this.un=dt1.uname;
this.em=dt1.eml;
this.ps=dt1.pass;
  }

  
  onClickUpdateData(dt2:any){
   }
  }

  
  