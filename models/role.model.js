import mongoose, { Schema } from 'mongoose';

const RoleScheme = Schema({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio']
    }
});

const model = mongoose.model('Role', RoleScheme);
export const schema = model.schema;
export default model;