import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }

  buscarPais( termino: string):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url); //No llamamos al subscribe
  }

  buscarCapital(termino:string):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisLanguage(lang:string):Observable<Country[]>{
    const url = `${this.apiUrl}/lang/${ lang }`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisMoneda(moneda:string):Observable<Country[]>{
    const url = `${this.apiUrl}/currency/${ moneda }`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisRegion(continent:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${ continent }`;
    return this.http.get<Country[]>(url);
  }

  getPaisAlphaCode(id:string):Observable<Country>{//Retornamos un solo Country
    const url = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>(url);
  }





}
