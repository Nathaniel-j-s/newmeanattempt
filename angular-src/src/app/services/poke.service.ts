import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokeService {
  poke: any;

  constructor(private http:Http) { }

  registerPoke(poke){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/pokes/pokeplanner', poke, {headers: headers})
      .map(res => {
        debugger;
        return res.json()});
  }

}
