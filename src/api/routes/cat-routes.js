import express from 'express';
import multer from 'multer';

import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
    getCatsByUserId
} from '../controllers/cat-controller.js';

import {createThumbnail, authenticateToken} from "../../middlewares.js";


const catRoutes = express.Router();
const upload = multer({dest: 'uploads/'});

catRoutes.route('/').get(getCat).post(upload.single('catImage'), createThumbnail, postCat);

catRoutes.route('/:id').get(authenticateToken, getCatById).put(authenticateToken, putCat).delete(authenticateToken, deleteCat);

catRoutes.route('/user/:id').get(getCatsByUserId);
export default catRoutes;