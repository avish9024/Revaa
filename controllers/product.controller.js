const models = require('../models');
const Validator = require('fastest-validator');

function createProduct(req, res) {
    const product = {
        name: req.body.name,
        type: req.body.type,
        image: req.body.image,
        description: req.body.description,
        createdBy: req.body.createdBy,
        createdAt: new Date(),
        deleted: 0
    }

    const schema = {
        title: {name: "string", optional: false},
        type: {name: "string", optional: false},
        image: {name: "string", optional: true},
        description: {name: "string", optional: true},
        createdBy: {name: "string", optional: false},
    }

    const v = new Validator();
    const validationResponse = v.validate(product, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Products.create(product).then(result => {
        res.status(200).json({
            message: "Product created successfully",
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
    models.Products.findByPk(id).then(result => {
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
    models.Products.findAll().then(result => {
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

function updateProduct(req, res) {
    const id = req.params.id;
    const product = {
        name: req.body.name,
        type: req.body.type,
        image: req.body.image,
        description: req.body.description,
        deleted: 0
    }

    models.Products.update(product, {
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
    createProduct: createProduct,
    getById: getById,
    getAll: getAll,
    updateProduct: updateProduct
}
