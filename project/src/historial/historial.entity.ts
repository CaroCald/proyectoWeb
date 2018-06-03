import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {VideoEntity} from "../video/video.entity";
@Entity('historial')
export class HistorialEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 500})
    fechaVioPelicula: string;

    @Column()
    puntuacion: number;

    @ManyToOne(type => VideoEntity, video=> video.historialVideo)
    videoHistorial:VideoEntity[];


}