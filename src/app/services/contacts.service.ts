import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IContacts } from '../models/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private baseUrl: string = 'http://localhost:3000/data';
  constructor(private _HttpClient: HttpClient) {}

  getContacts(): Observable<IContacts[]> {
    return this._HttpClient.get<IContacts[]>(`${this.baseUrl}`)
  }
}
