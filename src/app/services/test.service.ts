import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiKey = 'a7181ecb3eac4f32b1cdb504e6c287e3';

  constructor(private http: HttpClient) { }

  noticias_GET() {
    const url = `/api/v2/top-headlines?pageSize=5&country=us&apiKey=${this.apiKey}`;
    return this.http.get(url, {});
  }

  noticias_POST() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `/api/v2/top-headlines?country=us&apiKey=${this.apiKey}`;
    return this.http.post(url, {}, { headers });
  }
}
