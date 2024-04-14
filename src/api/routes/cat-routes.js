import express from 'express';
import multer from 'multer';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
} from '../controllers/cat-controller.js';
import {createThumbnail} from "../../middlewares.js";

const catRoutes = express.Router();
const upload = multer({dest: 'uploads/'});

catRoutes.route('/cat').get(getCat).post(upload.single('catImage'), createThumbnail, postCat);

catRoutes.route('/cat/:id').get(getCatById).put(putCat).delete(deleteCat);

export default catRoutes;