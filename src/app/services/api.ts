import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authservice } from './auth';


@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private authService: Authservice){}

  // Prepara la cabecera con el token de seguridad
  private getHeaders() {
    const token = this.authService.getToken();
    console.log(token);
    return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  }

  // Conectando app.use('/category', ...)
  getCategorias() {
    return this.http.get<any[]>(`${this.baseUrl}/category`);
  }

  // Conectando app.use('/product', ...)
  getProductos() {
    return this.http.get<any[]>(`${this.baseUrl}/product`);
  }

  // Conectando app.use('/users', ...)
  getUsuarios() {
    return this.http.get(`${this.baseUrl}/users`, { headers: this.getHeaders() });
  }
}