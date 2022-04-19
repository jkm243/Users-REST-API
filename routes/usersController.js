const express = require('express');
const router = express.Router();
// const ObjectID = require('mongoose').Types.ObjectId;

const { UsersModel } = require('../models/usersModel');

router.get('/', (req, res) => {
    UsersModel.find((err, docs) => {
      if (!err) res.send(docs);
      else console.log("Error to get data : " + err);
    })
  });

  module.exports = router;