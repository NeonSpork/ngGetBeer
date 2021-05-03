import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FlaskConnectorService {
  endpoint = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  // public GetTemp(): number {
  //   return -1;
  // }

  public async GetPints() {
    return this.http.get(this.endpoint + 'pints').pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);
        return [error.statusText];
      })
    );
  }

  public async GetTemp() {
    return this.http.get(this.endpoint + 'temp').pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);
        return [error.statusText];
      })
    );
  }

  public dispenseBeer() {
    this.http.put(this.endpoint + '/dispenseBeer', {}).subscribe(data => {
      console.log(data);
    });
  }

  public dispenseVodka() {
    this.http.put(this.endpoint + '/dispenseVodka', {}).subscribe(data => {
      console.log(data);
    });
  }
}
