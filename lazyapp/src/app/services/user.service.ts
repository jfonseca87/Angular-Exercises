import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { Paginator } from '../models/paginator';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

  getUsers(filter: LazyLoadEvent): Observable<any> {
    const parameters = new HttpParams().set('filterTable', JSON.stringify(filter));
    return this.client.get<any>(`https://localhost:5001/api/user`, { params: parameters });
  }

  getUsers2(): Observable<any> {
    return this.client.get<any>(`https://localhost:5001/api/User/Users2`);
  }
}
