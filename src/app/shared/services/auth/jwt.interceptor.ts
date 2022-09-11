import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@app/shared/services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.headers.keys()?.length) {
      return next.handle(request);
    }

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');

    const token = LocalStorageService.getToken();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }

    const newRequest = request.clone({ headers });

    return next.handle(newRequest);
  }
}
