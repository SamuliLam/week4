import express from 'express';
import {
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser,
} from '../controllers/user-controller.js';

const userRoutes = express.Router();

userRoutes.route('/').get(getUsers).post(postUser);

userRoutes.route('/:id').get(getUserById).put(putUser).delete(deleteUser);

export default userRoutes;