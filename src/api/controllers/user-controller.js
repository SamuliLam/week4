import { listAllUsers, findUserById, addUser, modifyUser, removeUser } from '../models/user-model.js';
import bcrypt from 'bcrypt';
const getUsers = (req, res) => {
    res.json(listAllUsers());
};

const getUserById = (req, res) => {
    const user = findUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
}

const postUser = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    const result = await addUser(req.body);
    if (result.user_id) {
        res.status(201);
        res.json({message: 'New user added.', user_id: result.user_id});
    } else {
        res.sendStatus(400);
    }
}

const putUser = async (req, res) => {
    if (
        res.locals.user.user_id !== Number(req.params.id) &&
        res.locals.user.role !== 'admin'
    ) {
        res.sendStatus(403);
        return;
    }
};

const deleteUser = async (req, res) => {
    const result = await removeUser(req.params.id);
    if (result.message === 'success') {
        res.json({message: 'User item deleted.'});
    } else {
        res.sendStatus(400);
    }
}

export { getUsers, getUserById, postUser, putUser, deleteUser };