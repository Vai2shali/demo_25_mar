import { Component } from '@angular/core';
import { convertToParamMap } from '@angular/router';

@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component {
  public allData:any=[];
  public courses:any=['MSC',"MBA","BBA","BCOM","BED"];
  public showTable:boolean=false;
  public idd :any;
  public fn:any;
  public ln:any;
  public em:any;
  public cor:any;
  public gen:any;
  public ps:any;
  public count:number=1;


 
  






  onSubmitData(data:any){
    console.log(data.value);
    if(data.value.id==undefined){
      data.value.id=this.count;
      this.allData.push(data.value);
      if(this.allData.length>0){
        this.showTable=true;
      };
      this.count++;
    }else{
      this.allData.forEach((element:any)=>{
        if(data.value.id==element.id){
          console.log(element);
          element.fname=data.value.fname;
          element.lname=data.value.lname;
          element.eml=data.value.eml;
          element.course=data.value.course;
          element.gender=data.value.gender;
          element.pass=data.value.pass;

        }
      });
      console.log(this.allData);
    }
    
  }
  onDelData(data:any){
 console.log(data) ;
 console.log(this.allData);
 this.allData.forEach((element:any,index:any)=>{
  if(element.id=data.id){
    this.allData.splice(index,1);
  }


 })    

  }
  onUpdateData(dt1:any){
    console.log(dt1);
    this.idd=dt1.id;
    this.fn=dt1.fname;
    this.ln=dt1.lname;
    this.em=dt1.eml;
    this.cor=dt1.course;
    this.gen=dt1.gender;
    this.ps=dt1.pass;
    




  }
  onClickUpdatBtn(dt2:any){

  }

}
