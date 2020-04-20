const connect = require('../mongodb/database');
const ObjectID = require('mongodb').ObjectID;

const controller = {};


controller.getAll = async (req, res) => {
    const db = await connect();
    const result = await db.collection('students').find({}).toArray();
    res.json(result);
};
controller.create = async (req, res) => {
    const db = await connect();
    const student = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        score: req.body.score,
        subject: req.body.subject,
    };
    const result = await db.collection('students').insertOne(student);
    res.json(result.ops[0]);
};
controller.findById = async (req, res) => {
    const {
        id
    } = req.params;
    const db = await connect();
    const result = await db.collection('students').findOne({
        _id: ObjectID(id)
    });
    res.json(result);
};
controller.update = async (req, res) => {
    const {
        id
    } = req.params;
    const newStudent = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        note: req.body.note,
        subject: req.body.subject,
    };
    const db = await connect();
    await db.collection('students').updateOne({
        _id: ObjectID(id)
    }, {
        $set: newStudent
    });

    res.json({
        message: `Student ${id} Updated`
    });
};
controller.delete = async (req, res) => {
    const id = req.params.id;
    const db = await connect();
    const result = await db.collection('students').deleteOne({
        _id: ObjectID(id)
    });
    res.json({
        message: `Student ${id} Deleted`,
        result
    });
};
controller.updateMany = async (req, res) => {
    const {
        status,
        value
    } = req.body;
    const db = await connect();
    const result = await db.collection('students').updateMany({
        score: value
    }, {
        $set: {
            status: status
        }
    })
    res.json(result);
};
controller.getAverage = async (req, res) => {
    const {
        sub
    } = req.params;
    const db = await connect();
    const result = await db.collection('students').find({
        subject: sub
    }).toArray();
    var average = 0;
    for (var i = 0; i < result.length; i++) {
        average += result[i].score;
    }
    average = average / result.length;
    res.json({
        average
    });
};

module.exports = controller;