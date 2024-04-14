import { listAllUsers, findUserById, addUser, modifyUser, removeUser } from '../models/user-model.js';

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

const postUser = (req, res) => {
    const result = addUser(req.body);
    if (result.user_id) {
        res.status(201);
        res.json({message: 'New user added.', user_id: result.user_id});
    } else {
        res.sendStatus(400);
    }
}

const putUser = async (req, res) => {
    const result = await modifyUser(req.body, req.params.id);
    if (result.message === 'success') {
        res.json({message: 'User item updated.'});
    } else {
        res.sendStatus(400);
    }
}

const deleteUser = async (req, res) => {
    const result = await removeUser(req.params.id);
    if (result.message === 'success') {
        res.json({message: 'User item deleted.'});
    } else {
        res.sendStatus(400);
    }
}

export { getUsers, getUserById, postUser, putUser, deleteUser };