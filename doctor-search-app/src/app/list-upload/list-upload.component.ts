import {Component, OnInit} from '@angular/core';
import {UploadService} from '../services/upload.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {
  showFile = false;
  fileUploads;

  constructor(private upload: UploadService) {
  }

  ngOnInit() {
  }


  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.upload.getFiles()
        .then((response) => {
          console.log(response);
          this.fileUploads = response;
        });
    }
  }

  delete(id) {
    console.log(id);
    this.upload.delete(id)
      .then((response) => {
        console.log(response);
        this.showFiles(true);
      });
  }
}