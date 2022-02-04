import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'
})
export class MovesService {
  apiUrl = "https://pokeapi.co/api/v2/pokemon/1";

  constructor(private http: HttpClient) { }

  getMovesList(): Promise<any> {
    return this.http.get(this.apiUrl)
    .toPromise()
    .then(response => response as any)
    .catch(err => console.log(err))
  }
}
