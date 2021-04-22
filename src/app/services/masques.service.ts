import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Masques } from '../Masques';

@Injectable({
  providedIn: 'root',
})
export class MasquesService {
  private apiServer = 'https://dataattest.herokuapp.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Masques[]> {
    return this.httpClient.get<Masques[]>(this.apiServer + '/Masques/');
  }

  read(id): Observable<Masques> {
    return this.httpClient.get<Masques>(`${this.apiServer}/${id}`);
  }

  create(nom): Observable<Masques> {
    return this.httpClient.post<Masques>(
      this.apiServer + '/Masques/',
      JSON.stringify(nom),
      this.httpOptions
    );
  }

  update(id, nom): Observable<Masques> {
    return this.httpClient.put<Masques>(
      this.apiServer + '/Masques/' + id,
      JSON.stringify(nom),
      this.httpOptions
    );
  }

  delete(id): Observable<Masques> {
    return this.httpClient.delete<Masques>(this.apiServer + '/Masques/' + id);
  }

  deleteAll(): Observable<Masques> {
    return this.httpClient.delete<Masques>(this.apiServer);
  }
}
