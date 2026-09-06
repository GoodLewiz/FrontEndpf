import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";



@Injectable({
     providedIn: 'root'
    
})

export class Authservice{
    private apiUrl = '';
    private logueado = new BehaviorSubject<boolean>(this.tieneToken());

    isLoggedIn$ = this.logueado.asObservable();

     constructor (private http : HttpClient){}

    login(email: string, password : string){
        return this.http.post<any>(`${this.apiUrl}/auth/login`,{email, password})
        .pipe(
            tap(response=>{
                if(response.token){
                    localStorage.setItem('auth_token', response.token)
                    this.logueado.next(true);
                }
            })
        )

    }

    private tieneToken(): boolean {
        return !!localStorage.getItem('auth_token');
    }

    getToken(){
        return localStorage.getItem('auth_token');
    }

    logout(){
        localStorage.removeItem('auth_token');
        this.logueado.next(false);
    }
}