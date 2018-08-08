import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    Post,
    ReflectMetadata,
    Req,
    Res,
    UseGuards
} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";
import {UsuarioService} from "../servicios/usuario.service";
import {Connection, getConnection} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioGuard} from "../guards/usuario.guard";

export const Roles = (...roles: string[]) => ReflectMetadata('roles', roles);
@Controller('usuario')
@UseGuards(UsuarioGuard)

export class UsuarioController {
    constructor(private _jwtService: JwtService, private _usuarioService:UsuarioService){

    }


    @Get('verificar/:correoElectronico')
    async validarUsuario(@Param() params, @Req() req, @Res() res){
        const existe=  await getConnection().getRepository(UsuarioEntity).findOne({correoElectronico: params.correoElectronico});
        if(existe){
            return res.send(existe)
        }else
        {
            return res.send({mensaje: 'No existe'})

        }
    }
    @Get('mostrar')
    findAll(): Promise<UsuarioEntity[]> {
        return this._usuarioService.llenar();
    }
    @Get('buscar:/correoElectronico')
   async buscar(@Param() param, @Res() res):Promise<UsuarioEntity[]>{
        const existe=  await getConnection().getRepository(UsuarioEntity).findOne({correoElectronico: param.correoElectronico});
        return res.response({existe});
    }

    @Post('crear')
    async agregarUsuario(
                         @Body('nombre') nombre,
                         @Body('apellido') apellido,
                         @Body('fechaNacimiento') fechaNacimiento,
                         @Body('pais') pais,
                         @Body('ciudad') ciudad,
                         @Body('numeroTelefono') numeroTelefono,
                         @Body('correoElectronico') correoElectonico,
                         @Res() res, @Req() req
    ) {

        const parametros = (nombre && apellido && fechaNacimiento && pais && ciudad && numeroTelefono && correoElectonico);

        if (parametros) {
            const userRepository = getConnection().getRepository(UsuarioEntity);
            const user = userRepository.create(req.body);
            return userRepository.save(user);
        }
        else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            })
        }


    }
}