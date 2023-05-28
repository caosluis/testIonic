import { Component } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  noticias: any = []

  constructor(private service: TestService) { }

  cargarNoticias() {
    this.service.noticias_GET().subscribe(data => {
      this.noticias = data
      console.log(this.noticias.articles);
      
    })
  }

  cargarNoticias2() {
    this.service.noticias_POST().subscribe(data => {
      this.noticias = data
    })
  }

}
