import { HttpClient, HttpHandler } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { HttpMock } from '@app/shared/mocks';
import { of } from 'rxjs';

import { MajlisService } from './majlis.service';

describe('MajlisService', () => {
  let service: MajlisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useClass: HttpMock,
        },
        HttpHandler,
      ],
    });
    service = TestBed.inject(MajlisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http.get when getItems invoked', inject(
    [HttpClient],
    (http: HttpClient) => {
      const getSpy = spyOn(http, 'get').and.returnValue(of([]));
      service.getItems();
      expect(getSpy).toHaveBeenCalled();
    }
  ));
});
