import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common'
import {HISTORIAL_SCHEMA} from "./historial.schema";
import * as Joi from 'joi';
@Injectable()
export class UsuarioPipe implements PipeTransform {

    constructor(private schema) {
    }

    transform(valorEnBrutoDelRequest: any, metadatosDelosDecoradorasDelNestJs: ArgumentMetadata) {
        this.schema = HISTORIAL_SCHEMA;
        const {
            error
        } = Joi.validate(valorEnBrutoDelRequest, this.schema);

        if (error) {
            throw new BadRequestException('Error validando usuario');

        }
        return valorEnBrutoDelRequest;
    }
}