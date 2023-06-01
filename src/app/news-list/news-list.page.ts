import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {

  title: string = 'News'
  noticias: any = []
  loading: boolean = false

  constructor(private service: TestService) { }

  cargarNoticias() {    
    this.loading = true
    this.service.noticias_GET().subscribe(data => {
      this.noticias = data
      this.loading = false
    })
  }

  cargarNoticias2() {
    this.service.noticias_POST().subscribe(data => {
      this.noticias = data
    })
  }

  ngOnInit() {
  }

}
