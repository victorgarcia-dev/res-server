import Role from '../models/role.model.js';
import User from '../models/user.model.js';

export const esRolVAlido = async( rol = '' ) => {
    const existeRol = await Role.findOne({ rol:rol });
    if(!existeRol){
        throw new Error("El rol no está registrado en la base de datos");
    } 
}


export const existeEmail = async( correo = '' ) => {
    //validar si existe email
    const validarEmail = await User.findOne({ correo : correo });
    if(validarEmail){
        throw new Error("EL correo ya Existe");
    }
}