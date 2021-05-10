import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FlaskConnectorService {
  endpoint = 'http://192.168.10.99/api/'; // TODO set this to a custom hostname

  constructor(private http: HttpClient) { }

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

  public async OpenBeer() {
    return this.http.get(this.endpoint + 'openBeer', {}).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);
        return [error.statusText];
      })
    );
  }

  public async OpenVodka() {
    return this.http.get(this.endpoint + 'openVodka', {}).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);
        return [error.statusText];
      })
    );
  }

  public async CloseBeer() {
    return this.http.get(this.endpoint + 'closeBeer', {}).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);
        return [error.statusText];
      })
    );
  }

  public async CloseVodka() {
    return this.http.get(this.endpoint + 'closeVodka', {}).pipe(
      map((res) => {
        return res;
      }),
      catchError((error) => {
        console.log(error);
        return [error.statusText];
      })
    );
  }
}
