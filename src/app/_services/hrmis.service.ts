import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class HrmisService {
    constructor(private http: HttpClient) {}

    apiRoot = 'http://172.16.130.8:3001';

    getEmployee(){
      const url = `${this.apiRoot}/employee`;
      return this.http.post(url, {}).pipe(
          tap(_ => console.log('fetched Employee')),
          catchError(this.handleError('getEmployee', []))
        );;
    }

    getEmployeeDetails(id: number){
      const url = `${this.apiRoot}/details`;
      let body = {id: id};
      return this.http.post(url, body).pipe(
        tap(_ => console.log('fetched Employee Details')),
        catchError(this.handleError('getEmployeeDetails', []))
      );;
    }  

    getMF() {
        const url = `${this.apiRoot}/getMaleFemale`;
        return this.http.post(url, {}).pipe(
            tap(_ => console.log('fetched Gender Report')),
            catchError(this.handleError('getMFReport', []))
          );;
    }

    getMaritalStatus() {
        const url = `${this.apiRoot}/getMaritalStatus`;
        return this.http.post(url, {}).pipe(
            tap(_ => console.log('fetched Marital Status Report')),
            catchError(this.handleError('getMaritalStatus', []))
          );;
    }

    getAgeBracket() {
        const url = `${this.apiRoot}/getAgeBracket`;
        return this.http.post(url, {}).pipe(
            tap(_ => console.log('fetched Age Bracket Report')),
            catchError(this.handleError('getAgeBracket', []))
          );;
    }

    getBirthday() {
        const url = `${this.apiRoot}/getBirthday`;
        return this.http.post(url, {}).pipe(
            tap(_ => console.log('fetched Birthday Report')),
            catchError(this.handleError('getBirthday', []))
          );;
    }

    getStepIncrement() {
        const url = `${this.apiRoot}/getStepIncrement`;
        return this.http.post(url, {}).pipe(
            tap(_ => console.log('fetched Step Increment Report')),
            catchError(this.handleError('getStepIncrement', []))
          );;
    }

    getSalaryGrade() {
        const url = `${this.apiRoot}/getSalaryGrade`;
        return this.http.post(url, {}).pipe(
            tap(_ => console.log('fetched Salary Grade Report')),
            catchError(this.handleError('getSalaryGrade', []))
          );;
    }

    addDivision(id, div){
      const url = `${this.apiRoot}/addDivision`;
      return this.http.post(url, {id, div}).pipe(
          tap(_ => console.log('fetched addDivision')),
          catchError(this.handleError('addDivision', []))
        );;
    }

    viewProperty(id){
      const url = `${this.apiRoot}/viewProperty`;
      return this.http.post(url, {id}).pipe(
          tap(_ => console.log('fetched viewProperty')),
          catchError(this.handleError('viewProperty', []))
        );;
    }

    addProperty(prop){
      const url = `${this.apiRoot}/addProperty`;
      return this.http.post(url, {prop}).pipe(
          tap(_ => console.log('execute addProperty')),
          catchError(this.handleError('addProperty', []))
        );;
    }

    deleteProperty(id){
      const url = `${this.apiRoot}/deleteProperty`;
      return this.http.post(url, {id}).pipe(
          tap(_ => console.log('execute deleteProperty')),
          catchError(this.handleError('deleteProperty', []))
        );;
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); 
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
    }
}