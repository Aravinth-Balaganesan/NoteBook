import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() { }

  setSession(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }
  getSession(key: string): any {
    return sessionStorage.getItem(key);
  }
  clear() {
    sessionStorage.clear();
  }
  removeItem(key : string){
    sessionStorage.removeItem(key);
  }
}
