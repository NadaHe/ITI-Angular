import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  Name = "";

  getData(d:any){
    // console.log(d.target.value);
    this.Name = d.target.value;
  }
  clear(){
    this.Name = "";
  }
}
