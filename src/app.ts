import express from 'express';
import morgan from 'morgan'; // para monitorear request
import cors from 'cors';
import config from './config';
import videoRoutes from './routes/videos.routes';


const app = express();
app.set('port', config.SERVER_PORT)
app.use(morgan('dev')); // usamos morgan para ver las peticiones
app.use(cors()); // puede ser consultado desde cualquier server
app.use(express.json()); //interprete de JSON
app.use(express.urlencoded({extended:false}))


app.use(videoRoutes);

export default app;