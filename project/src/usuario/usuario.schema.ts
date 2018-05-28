import * as Joi from 'joi';
export const USUARIO_SCHEMA= Joi.object().keys({
    nombre: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(30),
    edad: Joi.number().integer().greater(15).less(40),
    apellido:   Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(30),
    fechaNacimiento:  Joi.number().integer().max(10),
    pais:  Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(30),
    ciudad:  Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(30),
    numeroTelefono:  Joi.number().integer().max(10),
    correoElectronico: Joi.string().email(),

});