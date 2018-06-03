import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {TemporadaEntity} from "../Temporadas/temporada.entity";
import {HistorialEntity} from "../historial/historial.entity";

@Entity('video')
export class VideoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    urlVideos: string;

    @ManyToOne(type => TemporadaEntity, temporada=> temporada.videos)
    temporadaVideos:TemporadaEntity;

    @OneToMany(type => HistorialEntity, historial=> historial.videoHistorial)
    historialVideo:HistorialEntity;

}