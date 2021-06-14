import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Company } from "./Company";
import { Observable} from 'rxjs';



@Injectable({
    providedIn: "root"
})

export class CompanyService{
  constructor(private http:HttpClient){}
  
  
  getall():Observable<Company[]>{
      return this.http.get<Company[]>('http://localhost:8080/getCompanies/list')
  }
      
  
}
