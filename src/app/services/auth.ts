import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";



@Injectable({
     providedIn: 'root'
    
})

export class Authservice{
    private apiUrl = '';

     constructor (private http : HttpClient){}

    login(email: string, password : string){
        return this.http.post<any>(`${this.apiUrl}/auth/login`,{email, password})
        .pipe(
            tap(response=>{
                if(response.token){
                    localStorage.setItem('auth_token', response.token)
                }
            })
        )

    }

    getToken(){
        return localStorage.getItem('auth_token');
    }
}
