import express from 'express';
import {
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser,
} from '../controllers/user-controller.js';

import {body} from 'express-validator';
import {validationErrors} from '../../middlewares.js';

const userRoutes = express.Router();

userRoutes.route('/')
    .get(getUsers)
    .post(
        body('email').trim().isEmail(),
        body('username').trim().isLength({min: 3, max: 20}).isAlphanumeric(),
        body('password').trim().isLength({min: 8}),
        validationErrors,
        postUser
    );

userRoutes.route('/:id').get(getUserById).put(putUser).delete(deleteUser);

export default userRoutes;