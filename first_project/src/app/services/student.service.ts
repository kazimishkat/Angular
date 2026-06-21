import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { studentModel } from '../model/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {


  // 
  
  // private baseApi: string="http://localhost:3000/student";
  // constructor(private http: HttpClient){}

  // getAllStudent():Observable<studentModel[]>{
  //   return this.http.get<studentModel[]>(this.baseApi);
  // }

  // save(student:studentModel){
  //   return this.http.post<studentModel>(this.baseApi,student)  }

  //   update(student:studentModel):Observable<studentModel>{
  //     return this.http.put<studentModel>(this.baseApi+'/'+student.id,student);
  //   }

  //   delete(id:string):Observable<void>{
  //     return this.http.delete<void>(this.baseApi+'/'+id);
  //   }
  //  getById(id: string): Observable<studentModel> {

  //    return this.http.get<studentModel>(this.baseApi+'/'+id);

  // }


  private baseApi:string="http://localhost:3000/student";
  constructor(private http:HttpClient){};

  getAllStudent():Observable<studentModel[]>{
    return this.http.get<studentModel[]>(this.baseApi);
  }
  saveStudent(student:studentModel){
    return this.http.post<studentModel>(this.baseApi,student);
  }
  updateStudent(student:studentModel):Observable<studentModel>{
    return this.http.put<studentModel>(this.baseApi+'/'+student.id,student);
  }
  deleteStudent(id:string):Observable<void>{
    return this.http.delete<void>(this.baseApi+'/'+id);
  }
  getById(id:string):Observable<studentModel>{
    return this.http.get<studentModel>(this.baseApi+'/'+id);
  }
  }
