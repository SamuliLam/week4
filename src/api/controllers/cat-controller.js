import {addCat, findCatById, listAllCats, findCatsByUserId, removeCat, modifyCat} from "../models/cat-model.js";

const getCat = async (req, res) => {
    res.json(await listAllCats());
};

const getCatById = async (req, res) => {
    const cat = findCatById(req.params.id);
    if (cat) {
        res.json(cat);
    } else {
        res.sendStatus(404);
    }
};

const getCatsByUserId = async (req, res) => {
    const cats = await findCatsByUserId(req.params.id);
    if (cats.length > 0) {
        res.json(cats);
    } else {
        res.sendStatus(404);
    }
};

const postCat = async (req, res) => {
    const result = addCat(req.body, req.file.filename);
    if (result.cat_id) {
        res.status(201);
        console.log(JSON.stringify(req.body) + ' file data: ' + JSON.stringify(req.file));
        res.json({message: 'New cat added.', result});
    } else {
        res.sendStatus(400);
    }
};

const putCat = async (req, res) => {
    const result = await modifyCat(req.body, req.params.id);
    if (result.message === 'success') {
        res.json({message: 'Cat item updated.'});
    } else {
        res.sendStatus(400);
    }
}

const deleteCat = async (req, res) => {
    const result = await removeCat(req.params.id);
    if (result.message === 'success') {
        res.json({message: 'Cat item deleted.'});
    } else {
        res.sendStatus(400);
    }
}

export {getCat, getCatById, postCat, putCat, deleteCat, getCatsByUserId};