import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

 i = 1;
 interval:any="";
  srcImg="../../assets/SlideShow/1.jpg";

  next(){
    if (this.i < 7) {
      this.srcImg=`../../assets/SlideShow/${this.i}.jpg`;
      this.i++;
  }
  }
  slideShow(){
   this.interval = setInterval(()=> {
      if (this.i == 7) {
         this. i = 1;
      }
      this.srcImg=`../../assets/SlideShow/${this.i}.jpg`;
      this.i++;
  }, 500)
  }
  stop(){
    clearInterval(this.interval);
  }
  previous(){
      this.i--;
    if (this.i > 0) {
      this.srcImg=`../../assets/SlideShow/${this.i}.jpg`;  }
  }
}