import { Component, OnInit } from '@angular/core';
import { PhotoUploadService } from '../photo-upload.service';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit {

  fileName = '';

  constructor(private photoUploadService: PhotoUploadService) { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    const file :File= event?.target.files[0];
    if (file) {
      this.fileName = file.name;
    }
  }

}
