import {BadRequestException, Body, Controller, Get, Post, ReflectMetadata, Req, Res, UseGuards} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";
import {Usuario, UsuarioService} from "../servicios/usuario.service";
import {getConnection} from "typeorm";
import {UsuarioEntity} from "./usuario.entity";

@Controller('usuario')
export class UsuarioController {
    constructor(private _jwtService: JwtService, private _usuarioService:UsuarioService){

    }

    @Post('crear')
    async agregarUsuario(@Body('tipoUsuario') tipoUsuario,
                         @Body('nombre') nombre,
                         @Body('apellido') apellido,
                         @Body('fechaNacimiento') fechaNacimiento,
                         @Body('pais') pais,
                         @Body('ciudad') ciudad,
                         @Body('numeroTelefono') numeroTelefono,
                         @Body('correoElectronico') correoElectonico,
                         @Res() res, @Req() req
    ) {

        const parametros = (tipoUsuario && nombre && apellido && fechaNacimiento && pais && ciudad && numeroTelefono && correoElectonico);
        const userRepository = getConnection().getRepository(UsuarioEntity);
        if (parametros) {
            console.log(req.body);
            const usuarioPeliculas = userRepository.create(req.body);
            return userRepository.save(usuarioPeliculas);
        }
        else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            })
        }


    }
}