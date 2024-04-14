const getUser = (req, res) => {
    res.json(listAllUsers());
};

const getUserById = (req, res) => {
    const user = getUserById(req.params.id);
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