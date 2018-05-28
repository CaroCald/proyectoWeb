import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {HistorialEntity} from "../historial/historial.entity";
@Entity('pelicula')
export class PeliculaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    nombre: string;

    @Column({length: 500})
    descripcion: string;

    @Column({length: 500})
    actores: string;

    @Column({length: 500})
    genero: string;

    @Column({length: 500})
    ano: string;

    @Column({length: 500})
    imagenPelicula: string;

    @Column({length: 500})
    trailer: string;

    @Column()
    puntuacion: number;

    @OneToMany(type => HistorialEntity, historial=> historial.usuarioId)

    historial:HistorialEntity[];

}
