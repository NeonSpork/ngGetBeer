import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FlaskConnectorService {
  endpoint = 'http://sensorapi:5000/api/';

  constructor(private http: HttpClient) { }

  // public GetTemp(): number {
  //   return -1;
  // }

  // TODO parse the json
  public async GetSensorData() {
    return this.http.get(this.endpoint + 'sensors').pipe(
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
