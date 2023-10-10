import express from 'express';
import cors from 'cors';

import { router } from '../routes/user.route.js';
import { dbConnection } from '../database/config.db.js';


export class Server {
    constructor(){
        //configurar para usar express en el proyecto
        this.app = express();

        //variable de entorno
        this.port = process.env.PORT;

        //rutas api
        this.usersPath = '/api/users';

        //conectar a la base de datos
        this.conectarDB();

         //Middleware
         this.middleware();

        //rutas de mi app
        this.routes();

    }

    async conectarDB() {
        await dbConnection()
    }



    //rutas de mi app
    routes() {
        this.app.use( this.usersPath, router );
    }

    middleware(){

        //cors
        this.app.use(cors());

        //leo y parseo body
        this.app.use(express.json());

        //directorio publico
        this.app.use( express.static('public') );
    }

    //escuchar servidor
    listen(){
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en el puerto ${this.port}`);
        })
    }
}