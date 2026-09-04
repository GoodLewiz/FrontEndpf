import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
 productos : any[] = [];
constructor(private apiService : ApiService){}

ngOnInit(){
  this.apiService.getProductos().subscribe({
      next : (data) => this.productos =data,
      error: (err)=> console.error('error al obtener los productos', err)
      

    })
    console.log(this.productos)
}

}
