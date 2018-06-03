import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario.entity";
import {HistorialEntity} from "./historial/historial.entity";
import {PeliculaEntity} from "./Trailer/pelicula.entity";
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
      TypeOrmModule.forFeature([UsuarioEntity, HistorialEntity, PeliculaEntity])


  ],
  controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
