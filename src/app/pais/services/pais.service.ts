import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams().set( 'fields', 'name,capital,population,flags,cca2')
  }


  constructor( private http: HttpClient) { }

  buscarPais( termino: string):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams }); //No llamamos al subscribe
  }

  buscarCapital(termino:string):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarPaisLanguage(lang:string):Observable<Country[]>{
    const url = `${this.apiUrl}/lang/${ lang }`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarPaisMoneda(moneda:string):Observable<Country[]>{
    const url = `${this.apiUrl}/currency/${ moneda }`;
    return this.http.get<Country[]>(url , {params: this.httpParams});
  }

  buscarPaisRegion(continent:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${ continent }`;
    return this.http.get<Country[]>(url , {params: this.httpParams});
  }

  getPaisAlphaCode(id:string):Observable<Country>{//Retornamos un solo Country
    const url = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>(url);
  }





}
