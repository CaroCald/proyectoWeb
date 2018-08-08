import {JwtService} from "../servicios/jwt.service";
import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {getConnection} from "typeorm";
@Controller('auth')
export class AuthController {
    constructor(private _jwtService: JwtService){

    }
    @Post('emitir')
    async emitirToken(@Body('correoElectronico') correoElectronico) {
        const enviarParametros = correoElectronico;
        const existe = await getConnection().getRepository(UsuarioEntity).findOne({correoElectronico: correoElectronico});
        console.log(existe);
        if (enviarParametros) {
            const credencialesValidas = correoElectronico === existe;
            if (credencialesValidas) {
                return `
                <html>
        <head>
        </head>
        <body>
        <h1>Token</h1>
        <p>${this._jwtService.emitirToken({usuario: correoElectronico})}</p>
        </body>
        </html>`

                //{
                //jwt: this._jwtService.emitirToken({
                //  usuario:usuario
                // })
                //};
            }
            else {
                throw new BadRequestException(
                    {
                        mensaje: 'credenciales invalidas'
                    }
                )
            }
        } else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            })
        }
    }

    @Post('verificarSync')
    verificarTokenSync(@Body('jwt') jwt){
        const enviaParametos=jwt;
        if(enviaParametos){
            const tokenValido=this._jwtService.verificarTokenSync(jwt);
            if(tokenValido){
                return {mensaje: 'OK'}
            }else {
                throw new BadRequestException({
                    mensaje:'Token no valido'
                })
            }
        }else{
            throw new BadRequestException({
                mensaje:'No envia parametros'
            })
        }

    }

    @Post('verificarAsync')
    verificarTokeAsyn(@Body('jwt') jwt){
        const enviarParametos=jwt;
        if(enviarParametos){
            this._jwtService.verificarTokenASync(jwt, (error, datos)=>{
                if(error){
                    throw new  BadRequestException({
                        mensaje: 'Token Invalido',
                        error: error
                    });
                }
            })

        }else{
            throw new BadRequestException({
                mensaje:'No envia parametros'
            })
        }
    }
}