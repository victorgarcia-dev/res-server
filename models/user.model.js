import mongoose, { Schema } from 'mongoose';


const UsuarioScheme = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'],
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        emun: ['ADMIN_ROLE','USER_ROLE'],
        trim: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

//edito la respuesta de mi base de datos, para quitar información sensible en mi respuesta
UsuarioScheme.methods.toJSON = function () {
    const { __v, password, ...user } = this.toObject();
    return user;
}

const model = mongoose.model('User', UsuarioScheme);
export const schema = model.schema;
export default model;