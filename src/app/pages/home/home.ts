import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit{
  categorias : any[] = [];
  productos : any[] = [];

  //inyectar el servicioo

  constructor(private apiService : ApiService){}

  ngOnInit() {
    //traer las categorias
    this.apiService.getCategorias().subscribe({
      next:(data) => this.categorias = data,
      error: (err)=> console.error('error al obtener los categorias' , err)
    });
    
    //traer los productos

    this.apiService.getProductos().subscribe({
      next : (data) => this.productos =data,
      error: (err)=> console.error('error al obtener los productos', err)
      

    })
  }
};

