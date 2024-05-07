import {Component, EventEmitter, Output} from '@angular/core';
import {Image} from "../../../shared/models";
import {StorageClient} from "../../../clients/storage.client";

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrl: './add-photo.component.css'
})
export class AddPhotoComponent {

  @Output() onDownload = new EventEmitter<string>();
  @Output() onUpload = new EventEmitter<number>();

  public selectedFile: File;
  public base64Data: string;
  public retrieveResponse: Image;
  public response: number;
  public retrievedImage: string;
  constructor(
    private storageClient: StorageClient
  ) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    console.log(this.selectedFile.name)
  }

  uploadImage() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('image', this.selectedFile, this.selectedFile.name);
    this.storageClient.uploadFile(uploadImageData).subscribe(response => {
      this.response = response;
      this.onUpload.emit(response);
    })
  }

  getImage() {
    this.storageClient.downloadFile(2).subscribe(response => {
      this.retrieveResponse = response;
      this.base64Data = this.retrieveResponse.imageData;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      this.onDownload.emit(this.retrievedImage);
    })
  }
}
