import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RserviceService {
  url:string="http://localhost:9003/";

  constructor( private http:HttpClient) { }
  create(cust:any){
    return this.http.post(this.url,cust);
  }
}
