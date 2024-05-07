import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Image} from "../shared/models";


@Injectable({
  providedIn: 'root'
})
export class StorageClient {

  constructor(private http: HttpClient) {
  }

  public uploadFile(uploadImageData: FormData) {
    return this.http.post<number>('http://localhost:8080/images', uploadImageData);
  }

  public downloadFile(imageId: number) {
    return this.http.get<Image>(`http://localhost:8080/images/${imageId}`)
  }
}
