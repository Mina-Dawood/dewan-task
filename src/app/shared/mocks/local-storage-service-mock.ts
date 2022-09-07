export class LocalStorageServiceMock {
  //#region Token methods
  static getToken(): string | null {
    return 'test-token';
  }

  static setToken(token: string): void {
    // Do nothing
  }

  static removeToken(): void {
    // Do nothing
  }
  //#endregion
}
