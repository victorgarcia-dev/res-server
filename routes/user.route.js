import {Router} from 'express';
import { check } from 'express-validator';

import { esRolVAlido, existeEmail } from '../helpers/db-validators.helper.js';
import { validarCampos } from '../middlewares/validar-campos.js';

import { userDelete, userPatch, userPost, usersGet, usersPut } from '../controllers/user.controller.js';

export const router = Router();

router.get('/', usersGet);
router.post('/', [
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('password', 'El password es obligatorio y tiene que tener mas de 6 caracteres').isLength( {min:6} ).notEmpty(),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom( (correo) => existeEmail(correo) ),
    check('rol').custom( (rol) => esRolVAlido(rol) ),
    validarCampos
], userPost);
router.put('/:id', usersPut);
router.patch('/', userPatch);
router.delete('/', userDelete);