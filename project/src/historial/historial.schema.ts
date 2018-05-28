import * as Joi from 'joi';
export const HISTORIAL_SCHEMA= Joi.object().keys({
    fecha: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(3).max(30),
    puntuacion: Joi.number().integer().max(10),
});