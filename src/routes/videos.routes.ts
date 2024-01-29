import { Router } from "express";
import * as videoController from './videos.controller'
const router = Router();

router.get('/videos', videoController.getVideos); //Obtener todos los videos
router.get('/videos/:id', videoController.getVideo);//Obtener un video en especifico

router.post('/videos', videoController.createVideo);//Subir nuevo video
router.put('/videos/:id', videoController.updateVideo);//Actualizar un video

router.delete('/videos/:id', videoController.deleteVideo)//Borrra un video

export default router