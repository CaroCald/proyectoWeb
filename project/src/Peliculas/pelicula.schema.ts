
import * as Joi from 'joi';
export const PELICULA_SCHEMA= Joi.object().keys({
    nombre: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(30),
    descripcion: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(100),
    actores: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(50),
    genero: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(30),
    ano: Joi.number().integer().max(10),
    imagenPelicula: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(50),
    trailer: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(50),
    puntuacion: Joi.number().integer().max(10),
});
