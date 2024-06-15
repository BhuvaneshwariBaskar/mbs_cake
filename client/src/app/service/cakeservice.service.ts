import { Injectable } from '@angular/core';
import { Cakes } from '../interface/cakes';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CakeserviceService {
  private baseUrl: String = 'http://localhost:8080/v1/cakes';
  constructor(private http: HttpClient) {}
  getCakes(): Observable<Cakes[]> {
    return this.http.get<Cakes[]>(`${this.baseUrl}/getCakes`);
  }


  private cakeSource=new Subject<any>();
  cakeSelected$=this.cakeSource.asObservable();

  selectCake(cake:any){
    this.cakeSource.next(cake);
  }
}
