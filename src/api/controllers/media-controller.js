const postMedia = async (req, res, next) => {
    if (!req.file) {
        const error = new Error('Invalid or missing file');
        error.status = 400;
        next(error);
    }

    const {title, description} = req.body;
    const {filename, mimetype, size} = req.file;
    const user_id = req.user.user_id;
    const newMedia = {title, description, user_id, filename, mimetype, size};
    const result = await addMedia(newMedia);
    if (result.error) {
        return next(new Error(result.error));
    }
    res.status(201).json({message: 'New media item added.', ...result});
};