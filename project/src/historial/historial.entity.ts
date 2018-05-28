import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {PeliculaEntity} from "../Peliculas/pelicula.entity";
@Entity('historial')
export class HistorialEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 500})
    fechaVioPelicula: string;

    @Column()
    puntuacion: number;

    @ManyToOne(type => UsuarioEntity, usuario=> usuario.historialId)
    usuarioId:UsuarioEntity[];


    @ManyToOne(type => PeliculaEntity, pelicula=> pelicula.historial)
    historialId:PeliculaEntity[];



}