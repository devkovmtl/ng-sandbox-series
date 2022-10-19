import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class TestInterceptor implements HttpInterceptor {
  intercept(req: any, next: any) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer some-tokne'),
    });

    return next.handle(authReq);
  }
}
