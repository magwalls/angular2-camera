import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit, AfterViewInit {
  @ViewChild('videoplayer') videoPlayer: any;
  @ViewChild('canvas') canvas: any;

  context: any;

  @Input() width: number;
  @Input() height: number;

  constructor() { }

  capture() {
    this.context.drawImage(this.videoPlayer.nativeElement, 0, 0, this.width, this.height);
  }

  ngOnInit() {
    this.width = 320;
    this.height = 240;
  }

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    console.log(this.context);
    console.log(this.videoPlayer.nativeElement.width);

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
                          .then(stream => {
                            this.videoPlayer.nativeElement.src = window.URL.createObjectURL(stream);
                            this.videoPlayer.nativeElement.play();
                          });
    }
  }
}
