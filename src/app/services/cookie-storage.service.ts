import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService {

  constructor(
    private cookieService: CookieService
  ) { }


  setItem(key: string, value: any) {
    this.cookieService.set(key, value);
  }

  getItem(key: string): any {
    return this.cookieService.get(key);
  }

  public removeItem(key: string) {
    this.cookieService.delete(key);
  }

  public clear() {
    this.cookieService.deleteAll();
  }

  setBool(key: string, value: boolean) {
    this.cookieService.set(key, String(value));
  }

  getBool(key: string): boolean {
    return this.cookieService.get(key) === 'true';
  }

  setObject(key: string, value: object) {
    this.cookieService.set(key, JSON.stringify(value));
  }

  getObject(key: string): object | null {
    // let data: string = JSON.stringify(this.cookieService.get(key));
    let data: string = this.cookieService.get(key);
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  }
}
