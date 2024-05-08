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
        return this.http.post(`http://localhost:8080/images/${userId}`, uploadImageData, {observe: 'response'});
    }

    public downloadFile(userId: number) {
        return this.http.get<Image>(`http://localhost:8080/images/${userId}`)
    }


    public updateFile(uploadImageData: FormData, userId: number) {
        return this.http.put(`http://localhost:8080/images/${userId}`, uploadImageData, {observe: 'response'});
    }
}
