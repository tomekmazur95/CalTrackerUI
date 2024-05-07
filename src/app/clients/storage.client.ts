import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class StorageClient {

  constructor(private http: HttpClient) {
  }

  public uploadFile(uploadImageData: FormData) {
    return this.http.post<number>('http://localhost:8080/images', uploadImageData);
  }
}
