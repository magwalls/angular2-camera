import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { CameraService } from './camera.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
  providers: [ CameraService ]
})
export class CameraComponent implements OnInit, AfterViewInit {
  @ViewChild('videoplayer') videoPlayer: any;
  @ViewChild('canvas') canvas: any;
  public showVideo: any = false;  // Fungerar fast tvärtom. Byt logik

  context: any;
  comment: string;
  identifier: string;
  longitude: number;
  latitude: number;

  @Input() width: number;
  @Input() height: number;

  constructor(private cameraService: CameraService) { }

  capture() {
    // this.context = this.canvas.nativeElement.getContext('2d');
    this.context.drawImage(this.videoPlayer.nativeElement, 0, 0, this.width, this.height);
    this.showVideo = true;
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(x => {
        this.longitude = x.coords.longitude;
        this.latitude = x.coords.latitude;
      } );
    }
  }

  saveImage() {
    this.showVideo = false;

    let imgData: any = this.canvas.nativeElement.toDataURL('img/png');
    // console.log(imgData);

    imgData = imgData.replace('data:image/png;base64,', '');

    let postData: any = JSON.stringify({
      'ImageBase64String': imgData,
      'id': 3,
      'identifier': this.identifier,
      'comment': this.comment,
      'longitude': this.longitude,
      'latitude': this.latitude
    });

     console.log(postData);
    //  this.cameraService.saveImage(postData).subscribe(
    //    r => { console.log(r); },
    //     err => { console.log('Something went wrong saving image'); });
  }


  ngOnInit() {
    this.width = 320;
    this.height = 240;
  }

  ngAfterViewInit() {
    // Get current geolocation
    this.getGeolocation();

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
