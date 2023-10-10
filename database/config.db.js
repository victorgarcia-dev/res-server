import mongoose from 'mongoose';

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('base de datos corriendo');
        
    } catch (error) {
        throw new Error('Error en iniciar la base de datos');
    }

}