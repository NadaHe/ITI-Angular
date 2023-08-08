import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name="";
  age:any=null;
  message="";
  wrong="";
  @Output() myEvent = new EventEmitter();
  Firenow() {
    if(this.name.length<3 || this.name=="" ||this.age<20 || this.age>40 || this.age==null){
      this.message="Please enter your name more than or equal 3 characters and your age between 20 and 40";
      this.wrong=this.message
      this.message="";
    }
    else{
      let newStudent = {name:this.name, age:this.age};
      this.name="";
      this.age=null;
      this.myEvent.emit(newStudent);
      console.log(newStudent);
    }
  }
}
