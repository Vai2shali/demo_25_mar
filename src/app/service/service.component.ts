import { Component } from '@angular/core';
import { ApiService } from '../service.comp/api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  public allData:any=[];
  public showFlag:boolean=false;
  public count:number=1;
   public idd:any;
   public un:any;
   public em:any;
   public ps:any;

constructor(private api:ApiService){
  this.getallData();
}


  onSubmitdata(data:any){
console.log(data);
this.api.addData(data.value).subscribe(
  ((res:any)=>{
    this.allData=res;
    this.getallData();
  })
)
  }
  getallData(){
this.api.getdata().subscribe(
  ((res:any)=>{
    console.log(res);
    this.allData=res;
  })
)
  }
  onDelData(data:any){
console.log(data);
this.api.deleteData(data.id ).subscribe(
  ((res:any)=>{
console.log(res);
this.getallData();
  })
)
  }
  onUpdateData(data:any){
console.log(data);
this.idd=data.id;
this.un=data.uname;
this.em=data.eml;
this.ps=data.pass;
  }
  clickUpdateBtn(data:any){
console.log(data);
this.api.updateData(data.value).subscribe(
  ((res:any)=>{
    console.log(res);
    this.getallData();
  })
)
  }
}
