const models = require('../models');
const Validator = require('fastest-validator');

function createItem(req, res) {
    const items = {
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
        createdBy: req.body.createdBy,
        createdAt: new Date(),
        deleted: 0,
        productId: req.body.productId
    }

    const schema = {
        title: {name: "string", optional: false},
        icon: {name: "string", optional: false},
        color: {name: "string", optional: true},
        description: {name: "string", optional: true},
        createdBy: {name: "number", optional: false},
        productId: {name: "number", optional: false},
    }

    const v = new Validator();
    const validationResponse = v.validate(items, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Items.create(items).then(result => {
        res.status(200).json({
            message: "Item created successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            post: error
        });
    });
}

function getById(req, res) {
    const id = req.params.id;
    models.Items.findByPk(id).then(result => {
        res.status(200).json({
            message: "Fetched Product Successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            post: error
        });
    });
}

function getAll(req, res) {
    models.Items.findAll().then(result => {
        res.status(200).json({
            message: "Fetched Product Successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            post: error
        });
    });
}

function updateItem(req, res) {
    const id = req.params.id;
    const product = {
        name: req.body.name,
        type: req.body.type,
        image: req.body.image,
        description: req.body.description,
        deleted: 0
    }

    models.Items.update(product, {
        where: {id: id}
    }).then(result => {
        res.status(200).json({
            message: "Updated Product Successfully",
            post: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            post: error
        });
    });
}

module.exports = {
    createItem: createItem,
    getById: getById,
    getAll: getAll,
    updateItem: updateItem
}
