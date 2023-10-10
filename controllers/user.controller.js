import { request ,response} from 'express';

const usersGet = ( req = request, res = response ) => {
    const query = req.query; //argumentos en la url
    res.status(200).json(query);
}

const userPost = ( req = request , res = response ) => {
    const body = req.body;
    res.json(body);
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
