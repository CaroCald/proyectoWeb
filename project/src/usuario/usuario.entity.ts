import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {SerieEntity} from "../Serie/serie.entity";
@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    tipoUsuario: string;

    @Column({length: 500})
    nombre: string;

    @Column({length: 500})
    apellido: string;

    @Column({length: 500})
    fechaNacimiento: string;

    @Column({length: 500})
    pais: string;

    @Column({length: 500})
    ciudad: string;

    @Column()
    numeroTelefono: number;

    @Column({length: 500})
    correoElectronico: string;

    @OneToMany(type => SerieEntity,serie=> serie.usuarioId)

    SerieId:SerieEntity[];
}

