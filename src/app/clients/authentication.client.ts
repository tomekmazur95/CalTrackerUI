import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap, throwError} from "rxjs";
import {AuthenticationRequest, AuthenticationResponse, RegisterRequest} from "../../AuthenticationResponse";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationClient {
    private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(error);
    }

    constructor(private http: HttpClient) {
    }

    public login(email: string, password: string) {
        return this.http.post<AuthenticationResponse>("http://localhost:8080/api/v1/auth/authenticate",
            {
                email: email,
                password: password
            })
            .pipe(catchError(this.handleError));
    }

    public register(email: string, password: string) {
        return this.http.post<AuthenticationResponse>("http://localhost:8080/api/v1/auth/register",
            {
                email: email,
                password: password
            })
            .pipe(catchError(this.handleError));
    }


    /*public generateToken(request: AuthenticationRequest) {
        return this.http.post<AuthenticationResponse>("http://localhost:8080/api/v1/auth/authenticate", request)
            .pipe(tap(data => console.log('User credentials: ', data)),
                catchError(this.handleError))
    }*/

    /*    public getUserCredentials(token: string) {
            let tokenStr = 'Bearer ' + token;
            const headers = new HttpHeaders().set("Authorization", tokenStr);
            return this.http.get<User>("http://localhost:8080/users/1", {headers})
                .pipe(tap(data => console.log('User credentials:', data)),
                    catchError(this.handleError)
                );
        }*/
}
