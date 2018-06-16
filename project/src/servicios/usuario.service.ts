import {Inject, Injectable} from "@nestjs/common";
import {Connection, Repository} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Injectable()
export class UsuarioService {

    constructor(){

    }
    arregloUsuarios: Usuario[] = [];

    agregarUsuario(usuario: Usuario): Usuario[] {
        this.arregloUsuarios.push(usuario);
        return this.arregloUsuarios;
    }

    borrarUsuario(usuario: Usuario) {
        const indice = this.arregloUsuarios
            .findIndex(
                (usuarioObjeto) => usuarioObjeto === usuario);

        this.arregloUsuarios.slice(indice, 1);
        return this.arregloUsuarios;
    }

}


export class Usuario {
    constructor(
                public tipo:string,
                public nombre: string,
                public apellido: string,
                public fechaNacimiento: number,
                public pais: string,
                public ciudad: string,
                public numeroTelefono :number,
                public correoElectronico: string) {

    }
}
