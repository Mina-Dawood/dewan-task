import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '@app/shared/enums';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  //#region Token methods
  static getToken(): string | null {
    return localStorage.getItem(LocalStorageKeys.token);
  }

  static setToken(token: string): void {
    localStorage.setItem(LocalStorageKeys.token, token);
  }

  static removeToken(): void {
    localStorage.removeItem(LocalStorageKeys.token);
  }
  //#endregion
}
