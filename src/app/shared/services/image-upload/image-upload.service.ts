import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  private apiUrl = 'https://api.upload.io/v1/files/basic';

  constructor(private readonly http: HttpClient) {}

  uploadFile(file: File): Observable<string> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'image/jpeg');
    headers = headers.append(
      'Authorization',
      'Bearer public_12a1xpV65mKFyHY8eyLM8gXBSkYR'
    );

    return this.http
      .post<{ fileUrl: string }>(this.apiUrl, file, { headers })
      .pipe(map((res) => res.fileUrl));
  }
}
