import {addCat, findCatById, listAllCats} from "../models/cat-model.js";

const getCat = (req, res) => {
    res.json(listAllCats());
};

const getCatById = (req, res) => {
    const cat = findCatById(req.params.id);
    if (cat) {
        res.json(cat);
    } else {
        res.sendStatus(404);
    }
};

const postCat = (req, res) => {
    const result = addCat(req.body, req.file.filename);
    if (result.cat_id) {
        res.status(201);
        console.log(JSON.stringify(req.body) + ' file data: ' + JSON.stringify(req.file));
        res.json({message: 'New cat added.', result});
    } else {
        res.sendStatus(400);
    }
};

const putCat = (req, res) => {
    res.json({message: 'Cat item updated.'});
    res.sendStatus(200);
};

const deleteCat = (req, res) => {
    res.json({message: 'Cat item deleted.'});
    res.sendStatus(200);
};

export {getCat, getCatById, postCat, putCat, deleteCat};