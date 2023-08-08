import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  name = "";
  age:any = null;
  @Input() StudentArray:{name:String, age:Number}[] = [];

}
