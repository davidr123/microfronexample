import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-microfront';
  @ViewChild('video') video!: ElementRef;
  ngOnInit(): void {
    setTimeout(() => {
     this.video.nativeElement.height='400px';
     this.video.nativeElement.width='400px'


    
    }, 2000);
  }
}
