import express from 'express';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
} from '../controllers/cat-controller.js';

const catRoutes = express.Router();

catRoutes.route('/cat').get(getCat).post(postCat);

catRoutes.route('/cat/:id').get(getCatById).put(putCat).delete(deleteCat);

export default catRoutes;