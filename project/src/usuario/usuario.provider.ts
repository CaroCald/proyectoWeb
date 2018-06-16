import { Connection, Repository } from 'typeorm';
import {UsuarioEntity} from "./usuario.entity";

export const usuarioProvider = [
    {
        provide: 'PhotoRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(UsuarioEntity),
        inject: ['DbConnectionToken'],
    },
];