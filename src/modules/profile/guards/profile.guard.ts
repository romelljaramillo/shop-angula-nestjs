import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileGuard implements CanActivate {
  canActivate( context: ExecutionContext,): boolean | Promise<boolean> | Observable<boolean> {

    console.log(context);
    return false;
  }
}
