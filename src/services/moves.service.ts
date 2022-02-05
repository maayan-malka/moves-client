import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'
})
export class MovesService {
  apiUrl = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  getMovesList(): Promise<any> {
    return this.http.get(this.apiUrl + 'pokemon/1')
    .toPromise()
    .then(response => response as any)
    .catch(err => console.log(err))
  }

  getMoveDetails(id: number): Promise<any> {
    return this.http.get(this.apiUrl + 'move/' + id)
    .toPromise()
    .then(response => response as any)
    .catch(err => console.log(err))
  }
}
