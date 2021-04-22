import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attestations } from '../Attestations';

@Injectable({
  providedIn: 'root',
})
export class AttestationsService {
  private apiServer = 'https://dataattest.herokuapp.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Attestations[]> {
    return this.httpClient.get<Attestations[]>(this.apiServer + '/Attestations/');
  }

  read(id): Observable<Attestations> {
    return this.httpClient.get<Attestations>(`${this.apiServer}/${id}`);
  }

  create(nom): Observable<Attestations> {
    return this.httpClient.post<Attestations>(
      this.apiServer + '/Attestations/',
      JSON.stringify(nom),
      this.httpOptions
    );
  }

  update(id, nom): Observable<Attestations> {
    return this.httpClient.put<Attestations>(
      this.apiServer + '/Attestations/' + id,
      JSON.stringify(nom),
      this.httpOptions
    );
  }

  delete(id): Observable<Attestations> {
    return this.httpClient.delete<Attestations>(
      this.apiServer + '/Attestations/' + id
    );
  }

  deleteAll(): Observable<Attestations> {
    return this.httpClient.delete<Attestations>(this.apiServer);
  }
}
