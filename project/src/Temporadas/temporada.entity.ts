import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {SerieEntity} from "../Serie/serie.entity";
import {VideoEntity} from "../video/video.entity";
@Entity('temporada')
export class TemporadaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numeroTemporadas: number;

    @ManyToOne(type => SerieEntity, temporada=> temporada.temporadas)
    series:SerieEntity[];

    @OneToMany(type => VideoEntity, video=> video.temporadaVideos)
    videos:VideoEntity[];

}