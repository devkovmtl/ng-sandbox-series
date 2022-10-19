import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer some-secret-token',
      }),
    };
    return this.http
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`,
        httpOptions
      )
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(() => new Error('Error'));
        })
      );
  }
}
