import { request ,response} from 'express';

import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';


const usersGet = ( req = request, res = response ) => {
    const query = req.query; //argumentos en la url
    res.status(200).json(query);
}

const userPost = async ( req = request , res = response ) => {
    //obtengo los datos enviamos por el usuario
    const { nombre, password, correo, rol } = req.body;

    //valido los datos obtenidos con el schema creado en mongo
    const user = new User({ nombre, password, rol, correo });

    //encriptar password
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync( password, salt );

    //guardo en la db los datos
    await user.save()

    //respondo en el que fue exitoso
    res.status(201).json(user);
}

const usersPut = ( req = request, res = response ) => {
    const id = req.params.id;
    console.log(id);
    console.log(12);
    res.status(200).json({ id:id});
}

const userPatch = ( req, res = response ) => {
    res.status(200).json({ message:"Api patch controller"});
}

const userDelete = ( req, res = response ) => {
    res.status(200).json({ message:"Api delete controller"});
}


export {
    usersGet,
    userPost,
    usersPut,
    userPatch,
    userDelete
}
