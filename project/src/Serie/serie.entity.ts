import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {TemporadaEntity} from "../Temporadas/temporada.entity";
import {TrailerEntity} from "../Trailer/trailer.entity";
@Entity('serie')
export class SerieEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    nombreSerie: string;

    @Column()
    anio: number;

    @ManyToOne(type => UsuarioEntity, usuario=> usuario.SerieId)
    usuarioId:UsuarioEntity[];

    @OneToMany(type => TemporadaEntity,temporada=> temporada.series)

    temporadas:TemporadaEntity[];

    @OneToMany(type => TrailerEntity,serie=> serie.serieTrailer)
   trailerSerie:TrailerEntity[];

}

