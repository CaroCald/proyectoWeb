import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common'
import {PELICULA_SCHEMA} from "./pelicula.schema";
import * as Joi from 'joi';
@Injectable()
export class PeliculaPipe implements PipeTransform {

    constructor(private schema) {
    }

    transform(valorEnBrutoDelRequest: any, metadatosDelosDecoradorasDelNestJs: ArgumentMetadata) {
        this.schema = PELICULA_SCHEMA;
        const {
            error
        } = Joi.validate(valorEnBrutoDelRequest, this.schema);

        if (error) {
            throw new BadRequestException('Error ');

        }
        return valorEnBrutoDelRequest;
    }
}