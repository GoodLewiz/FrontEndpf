import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  product = {
  name: 'Cadena Plateada',
  category: 'Accesorios',
  image: 'assets/imagenes/cadena.jpg',
  oldPrice: 80,
  price: 60
};

}
