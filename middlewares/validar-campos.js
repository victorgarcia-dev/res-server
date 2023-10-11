import { response, request } from 'express';
import {validationResult} from 'express-validator';

export const validarCampos = ( req = request, res = response, next ) => {
    //validar errores middleware
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json(errors);
    }

    //sigue con el siguiente middleware
    next();
}