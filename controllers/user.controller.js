const models = require('../models');

function createProduct(req, res) {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userEmail: req.body.userEmail,
        userPhoto: req.body.userPhoto,
        createdBy: req.body.createdBy,
        createdAt: new Date(),
        deleted: 0
    }

    models.Users.create(user).then(result => {
        res.status(200).json({
            message: "User created successfully",
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
    models.Users.findByPk(id).then(result => {
        res.status(200).json({
            message: "Fetched User Successfully",
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
    models.Users.findAll().then(result => {
        res.status(200).json({
            message: "Fetched User Successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            post: error
        });
    });
}

function updateUser(req, res) {
    const id = req.params.id;
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userEmail: req.body.userEmail,
        userPhoto: req.body.userPhoto,
        createdBy: req.body.createdBy,
        deleted: req.body.deleted
    }

    models.Users.update(user, {
        where: {id: id}
    }).then(result => {
        res.status(200).json({
            message: "Updated User Successfully",
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
    updateUser: updateUser
}
