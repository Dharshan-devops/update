import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public data:any


  constructor(private http:HttpClient) { }

  register(data:any=[]){
    console.log(data)
    return this.http.post<any[]>("http://localhost:3000/api/register",data)

  }

  login(data:any=[]){
    console.log(data)
    return this.http.post<any[]>("http://localhost:3000/api/login",data)

  }

  file(data:any){
    console.log(data)
    return this.http.post<any[]>("http://localhost:3000/api/file",data)
  }

  getdata(data:any){
    // console.log(data)
    return this.http.post<any[]>("http://localhost:3000/api/getdata",data)
  }
  
  getdatanew(data:any){
    // console.log(data)
    return this.http.post<any[]>("http://localhost:3000/api/getdatanew",data)
  }

  getupdate(data:any){
    console.log("updates[Auth]:",data)
    return this.http.post<any[]>("http://localhost:3000/api/getupdate",data)
  }

  grid(data:any=[]){
    console.log(data)
    return this.http.post<any[]>("http://localhost:3000/api/grid",data)

  }

  delete(data:any):Observable<object>{
    console.log("Delete[Auth]:",data)
    return this.http.post<any[]>("http://localhost:3000/api/delete",data)

  }

}