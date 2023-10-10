import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HeadersInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log('through interceptor', req)
        const API_KEY = '123';
        const request = req.clone({
           headers: req.headers.set('X-RapidAPI-Key', 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177')
                               .set('X-RapidAPI-Host', 'apidojo-yahoo-finance-v1.p.rapidapi.com')
        });
        console.log('manuplited request', request);
        return next.handle(request);
    }

}