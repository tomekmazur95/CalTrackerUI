import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image, User} from "../../../shared/models";
import {StorageClient} from "../../../clients/storage.client";

@Component({
    selector: 'app-edit-photo',
    templateUrl: './edit-photo.component.html',
    styleUrl: './edit-photo.component.css'
})
export class EditPhotoComponent implements OnInit {

    @Output() onDownloadEditImage = new EventEmitter<string>();
    @Output() onUpdate = new EventEmitter<number>();
    @Input() userCredentials: User;
    public selectedFile: File;
    public base64Data: string;
    public retrieveResponse: Image;
    public response: number;
    public retrievedEditImage: string;
    public showSave = true;

    constructor(
        private storageClient: StorageClient
    ) {
    }

    ngOnInit(): void {
        if (this.userCredentials.id) {
            this.getImage()
        }
    }

    onFileSelected(event: any): void {
        this.selectedFile = event.target.files[0] ?? null;
        console.log(this.selectedFile)
        this.showSave = true;
    }

    updateImage() {
        const uploadImageData = new FormData();
        uploadImageData.append('image', this.selectedFile, this.selectedFile.name);
        this.storageClient.updateFile(uploadImageData, this.userCredentials.id).subscribe(({body, status}) => {
            if (status == 200) {
                this.getImage();
            }
            if (typeof body === "string") {
                this.response = parseInt(body);
            }
            this.onUpdate.emit(this.response);
        })
        this.showSave = false;
    }

    getImage() {
        this.storageClient.downloadFile(this.userCredentials.id).subscribe(response => {
            this.retrieveResponse = response;
            this.base64Data = this.retrieveResponse.imageData;
            this.retrievedEditImage = 'data:image/jpeg;base64,' + this.base64Data;
            this.onDownloadEditImage.emit(this.retrievedEditImage);
        })
    }
}
