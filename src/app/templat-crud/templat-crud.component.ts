import { Component } from '@angular/core';

@Component({
  selector: 'app-templat-crud',
  templateUrl: './templat-crud.component.html',
  styleUrls: ['./templat-crud.component.css']
})
export class TemplatCrudComponent {
  public showTable:boolean=false;
  public allData:any=[];
  public idd:any;
  public un:any;
  public em:any;
  public ps:any;
  public count:number=1;

   



  onsubmitData(data:any){
   console.log(data);
   if(data.value.id ===undefined) {
    data.value.id=this.count;
    this.allData.push(data.value);
    if(this.allData.length> 0){
      this.showTable=true;
    };
    this.count++;
   }else{
    this.allData.forEach((element:any)=>{
      if(data.value.id== element.id){
        console.log(element);
        element.uname=data.value.uname;
        element.eml=data.value.eml;
        element.ps=data.value.pass;

      }
    });
    console.log(this.allData);
   }
  }
  onDelData(data:any){
    console.log(data);
    this.allData.forEach((element:any,index:any)=>{
      if(element.id = data.id){
        this.allData.splice(index,1);
      }
     })
  }
  onUpdateData(data:any){
    console.log(data);
    this.idd=data.id;
    this.un=data.uname;
    this.em=data.eml;
    this.ps=data.pass;
 


  }

  onClickupdataeBtn(data:any){

  }
}
