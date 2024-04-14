import express from 'express';
import multer from 'multer';

import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
    getCatsByUserId,
} from '../controllers/cat-controller.js';

import {createThumbnail, authenticateToken, validationErrors, upload} from "../../middlewares.js";


const catRoutes = express.Router();

catRoutes.route('/').get(getCat).post(upload.single('catImage'), createThumbnail, validationErrors, postCat);

catRoutes.route('/:id').get(authenticateToken, getCatById).put(authenticateToken, putCat).delete(authenticateToken, deleteCat);

catRoutes.route('/user/:id').get(getCatsByUserId);
export default catRoutes;