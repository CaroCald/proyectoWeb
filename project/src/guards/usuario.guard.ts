import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";
@Injectable()
export  class UsuarioGuard  implements CanActivate{
    constructor(private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const user = request.get('Cookie');
        const reflectorNecesitaValidacion = this.reflector.get(
            'necesitaValidacion',
            context.getHandler()
        );
        if(reflectorNecesitaValidacion){
            if(user==='user=admin'){
                return true;
            }
            else{
                return true;
            }
        }else{
            return true

        }


    }

}