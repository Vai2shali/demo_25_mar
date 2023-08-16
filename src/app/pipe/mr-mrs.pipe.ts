import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mrMrs'
})
export class MrMrsPipe implements PipeTransform {

  transform(value: string, gender:string ): string {
   if(gender ==="male"){
    return 'mr'+ ' '+ value;
   }else{
    return 'mrs'+ ' '+ value;
   }
}
}