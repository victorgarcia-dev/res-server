import {Router} from 'express';

import { userDelete, userPatch, userPost, usersGet, usersPut } from '../controllers/user.controller.js'

export const router = Router();

router.get('/', usersGet);
router.post('/', userPost);
router.put('/:id', usersPut);
router.patch('/', userPatch);
router.delete('/', userDelete);