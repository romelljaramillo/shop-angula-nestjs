import { Injectable, CanActivate, ExecutionContext, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileGuard implements CanActivate {
  canActivate( context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.user);
    return false;
  }
}
