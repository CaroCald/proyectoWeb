import { Connection, Repository } from 'typeorm';
import {UsuarioEntity} from "./usuario.entity";

export const usuarioProvider = [
    {
        provide: 'UsuarioRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(UsuarioEntity),
        inject: ['DbConnectionToken'],
    },
];