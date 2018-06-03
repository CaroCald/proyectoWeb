import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario.entity";
import {HistorialEntity} from "./historial/historial.entity";
import {SerieEntity} from "./Serie/serie.entity";
import {TrailerEntity} from "./Trailer/trailer.entity";
import {TemporadaEntity} from "./Temporadas/temporada.entity";
import {VideoEntity} from "./video/video.entity";
@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'peliculas',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      TypeOrmModule.forFeature([UsuarioEntity, HistorialEntity, SerieEntity, TrailerEntity, TemporadaEntity, VideoEntity])


  ],
  controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
