import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express-serve-static-core';

@Injectable()
export class httpInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();
        const request: Request = ctx.getRequest();
        console.log('request: ', request);
        console.log('url: ', request.url);
        console.log('Method: ', request.method);
        console.log('headers: ', request.headers);
        console.log('ip: ', request.ip);
        console.log('path: ', request.path);
        console.log('query: ', request.query);
        const imp = import('.' + request.url);
        console.log(imp.then());
        let ruta = request.path;

        const modulo = 'UsersModule';
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => console.log(`After... ${Date.now() - now}ms`)),
            );
    }
}