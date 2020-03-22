import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiReq
    let temp = req.url.split(':', 1);
    if (temp[0]=='http'){
      apiReq = req;
    } else {
      apiReq = req.clone({ url: `http://maxvorhauer.pythonanywhere.com/shop/${req.url}` });
    }

    return next.handle(apiReq);
  }
}
