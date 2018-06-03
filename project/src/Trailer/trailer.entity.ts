import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {SerieEntity} from "../Serie/serie.entity";
@Entity('trailer')
export class TrailerEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    trailerPrincipalURL: string;

    @Column({length: 500})
    trailerSecundarioURL: string;

    @ManyToOne(type => SerieEntity, serie=> serie.trailerSerie)
    serieTrailer:SerieEntity[];


}