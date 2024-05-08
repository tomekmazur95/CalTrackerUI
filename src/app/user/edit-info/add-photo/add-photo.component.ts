import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image, User} from "../../../shared/models";
import {StorageClient} from "../../../clients/storage.client";

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrl: './add-photo.component.css'
})
export class AddPhotoComponent  implements OnInit{

  @Output() onDownload = new EventEmitter<string>();
  @Output() onUpload = new EventEmitter<number>();
  @Input() userCredentials : User;

  public selectedFile: File;
  public base64Data: string;
  public retrieveResponse: Image;
  public response: number;
  public retrievedImage: string;

  constructor(
    private storageClient: StorageClient
  ) {}

  ngOnInit(): void {
    if(this.userCredentials.id) {
      this.getImage()
    }
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    console.log(this.selectedFile.name)
  }

  uploadImage() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('image', this.selectedFile, this.selectedFile.name);
    this.storageClient.uploadFile(uploadImageData, this.userCredentials.id).subscribe(response => {
      if(response.status == 200) {
        this.getImage();
      }
      if (typeof response.body === "string") {
        this.response = parseInt(response.body);
      }
      this.onUpload.emit(this.response);
    })
  }

  getImage() {
    this.storageClient.downloadFile(this.userCredentials.id).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.imageData;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      this.onDownload.emit(this.retrievedImage);
    })
  }
}
