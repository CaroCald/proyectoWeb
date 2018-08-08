import {Inject, Injectable, Req, Res} from "@nestjs/common";
import {Connection, getConnection, Repository} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(UsuarioEntity)
                private readonly userRepository: Repository<UsuarioEntity>){
    }

    async busquedaUser(correo): Promise<UsuarioEntity[]> {
        return await getConnection().getRepository(UsuarioEntity)
            .createQueryBuilder("usuario").where({
                correo: correo
            }).getMany();
    }
    async llenar(): Promise<UsuarioEntity[]> {
        return await this.userRepository.find();
    }


}


export class Usuario {
    constructor(
                public tipoUsuario:string,
                public nombre: string,
                public apellido: string,
                public fechaNacimiento: number,
                public pais: string,
                public ciudad: string,
                public numeroTelefono :number,
                public correoElectronico: string) {

    }
}
