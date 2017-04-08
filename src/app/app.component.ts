import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { HelpComponent } from './help/help.component';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  
  constructor(public dialog: MdDialog, public appService: AppService) {}

  openHelpDialog() {
    let dialogRef = this.dialog.open(HelpComponent);
    dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
    });
  }

  ngOnInit() {


    // const video: any = document.getElementById('video');


    // // Get access to the camera!
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //     // Not adding `{ audio: true }` since we only want video now
    //     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
    //         video.src = window.URL.createObjectURL(stream);
    //         video.play();
    //     });
    // }
  }
  }

