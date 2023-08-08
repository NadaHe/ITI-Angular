import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'secondProject';

 students:{name:String, age:Number}[] = [];

 getStudents(e:{name:String , age:Number}){
   this.students.push(e);
   console.log(this.students);
 }
}
