import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CameraService } from './camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  providers: [ CameraService ]
})
export class CameraComponent implements OnInit, AfterViewInit {
  @ViewChild('videoplayer') videoPlayer: any;
  @ViewChild('canvas') canvas: any;

  context: any;

  @Input() width: number;
  @Input() height: number;

  constructor(private cameraService: CameraService) { }

  capture() {
    this.context.drawImage(this.videoPlayer.nativeElement, 0, 0, this.width, this.height);
  }

  saveImage() {
    let imgData: any = this.canvas.nativeElement.toDataURL('img/png');
    // console.log(imgData);

    imgData = imgData.replace('data:image/png;base64,', '');

    let postData: any = JSON.stringify({ imageData: imgData });

//     console.log(postData);
     this.cameraService.saveImage(postData);
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
