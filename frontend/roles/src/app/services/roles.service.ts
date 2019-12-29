import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../interface/role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
// Data Edit Variable

  private _roleData: Role = null;

  private roles: Role[] = [];

  constructor(private http: HttpClient) { }
  get roleData() {
    return this._roleData;
  }

  set roleData(roleData: Role) {
    this._roleData = roleData;
  }
  baseUrl = 'http://localhost:3000/api/roles/';


  getRoles() {
    return this.http.get(this.baseUrl);
  }

  updateRole(roleData: any, id) {
    return this.http.put<{message: string, data: any}>(this.baseUrl + id, roleData);
  }


  addRole(roles: Role) {
    return this.http.post<{ message: string, data: any}>(this.baseUrl, roles);
  }

  deleteRole(roleId: string) {
    console.log(roleId);
    return this.http.delete(this.baseUrl + roleId);
  }
  deleteAllRoles() {
    return this.http.delete(this.baseUrl);
  }



}
