import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { banner } from 'src/app/shared/models/banner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  public resourceUrl = "https://6319bfa08e51a64d2beb602d.mockapi.io/mock/v1/banners"
  constructor(protected http: HttpClient) { }

  getBanner(): Observable<HttpResponse<banner[]>> {
    return this.http.get<banner[]>(this.resourceUrl, { observe: 'response' });
  }
}
