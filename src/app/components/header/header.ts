import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Authservice } from '../../services/auth';


@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  sesionIniciada = false;

  constructor(private authService: Authservice, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(logueado => this.sesionIniciada = logueado);
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}