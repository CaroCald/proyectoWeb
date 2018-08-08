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
import {UsuarioController} from "./usuario/usuario.controller";
import {UsuarioService} from "./servicios/usuario.service";
import {JwtService} from "./servicios/jwt.service";
import {AuthController} from "./Auth/auth.controller";
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
  controllers: [AppController, UsuarioController, AuthController],
    providers: [AppService, UsuarioService, JwtService],
})
export class AppModule {}
