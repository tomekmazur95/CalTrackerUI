import {Component, OnInit} from '@angular/core';
import {UserClient} from "../clients/user.client";
import {Activity, Gender, User, UserInfoResponse} from "../shared/models";
import {HttpClient} from "@angular/common/http";
import {StorageClient} from "../clients/storage.client";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  public userCredentials: User;
  public userInfo: UserInfoResponse;
  public addInfo: boolean = false;
  public editInfo: boolean = false;
  public selectedFile: File;
  public base64Data: any;
  retrievedImage: any;
  retrieveResponse: any;
  public response: any;

  showAddInformationButton = true;
  showEditInformationButton = true;

  constructor(
    private userClient: UserClient,
    private httpClient: HttpClient,
    private storageClient: StorageClient,
  ) {
  }

  ngOnInit() {
    this.userClient.getUserInfo().subscribe(userinfo => {
      this.userInfo = userinfo
      this.userClient.getUserCredentials(this.userInfo.id).subscribe(e => this.userCredentials = e)
    });
  }

  openAddInformationForm() {
    this.addInfo = true;
    this.showAddInformationButton = false;
  }

  cancelInfo() {
    this.addInfo = false;
    this.showAddInformationButton = true;
    this.showEditInformationButton = true;
    this.editInfo = false;
  }

  saveInfo(data: any) {
    this.userClient.createUserCredentials(this.userInfo.id, data).subscribe(e => this.userCredentials = e);
    this.addInfo = false;
    this.showAddInformationButton = true;
  }

  openEditInformationForm() {
    this.editInfo = true;
    this.showEditInformationButton = false;
  }

  saveEditInfo(data: any) {
    this.userClient.editUserCredentials(this.userCredentials.id, data).subscribe(e => this.userCredentials = e);
    this.editInfo = false;
    this.showEditInformationButton = true;
  }

  genderListMap: Map<string, Gender> = new Map([
    ['Male', Gender.MALE],
    ['Female', Gender.FEMALE]
  ]);

  activityListMap: Map<string, Activity> = new Map([
    ['Sedentary', Activity.SEDENTARY],
    ['Lightly active', Activity.LIGHTLY_ACTIVE],
    ['Moderately active', Activity.MODERATELY_ACTIVE],
    ['Very active', Activity.VERY_ACTIVE],
    ['Extra active', Activity.EXTRA_ACTIVE]
  ])

  formatGender() {
    let gender = this.userCredentials.gender;
    let genderKey: string;
    for (const [k, v] of this.genderListMap) {
      if (v === gender) {
        genderKey = k;
        break;
      }
    }
    return genderKey;
  }

  formatActivity() {
    let activity = this.userCredentials.activity;
    let activityKey: string;
    for (const [k, v] of this.activityListMap) {
      if (v === activity) {
        activityKey = k;
        break;
      }
    }
    return activityKey;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    console.log(this.selectedFile.name)
  }

  onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('image', this.selectedFile, this.selectedFile.name);
    this.storageClient.uploadFile(uploadImageData).subscribe(response => {
      this.response = response;
    })
  }

  getImage() {
    this.httpClient.get(`http://localhost:8080/images/1`)
      .subscribe(
        res => {
          this.retrieveResponse = res;
          this.base64Data = this.retrieveResponse.imageData;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}
