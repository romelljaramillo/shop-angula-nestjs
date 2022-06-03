import { Injectable, CanActivate, ExecutionContext, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileGuard implements CanActivate {
  canActivate( context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {

    const handler = context.getHandler();
    const cls = context.getClass();

    // console.log(handler);
    // console.log(cls);

    // const request = context.switchToHttp().getRequest();
    // console.log(request.user);


    //const request = context.switchToHttp().getRequest();
    //context.getArgs()[0]
    //if(context.getArgs().length > 0)
    //console.log(context.getArgs()[0].url);
    // for(const item of context.getArgs()) {
    //   if(item instanceof IncomingMessage) { 
    //     console.log("LKLEga ", item.url);
    //     console.log("LKLEga ", item.method);
    //   }
    // }
    return true;
  }
}
