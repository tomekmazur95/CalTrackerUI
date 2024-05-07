import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Image} from "../shared/models";


@Injectable({
  providedIn: 'root'
})
export class StorageClient {

  constructor(private http: HttpClient) {
  }

  public uploadFile(uploadImageData: FormData, userId: number) {
    return this.http.post<number>(`http://localhost:8080/images/${userId}`, uploadImageData);
  }

  public downloadFile(userId: number) {
    return this.http.get<Image>(`http://localhost:8080/images/${userId}`)
  }
}
