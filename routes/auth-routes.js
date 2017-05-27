const bcrypt = require('bcrypt');
const express = require('express');
const User = require('../models').User;
const router = new express.Router();
const database = require('../database');

router.post('/contact', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    console.log("" + name + email + phone + message);
     database.transaction(function(t) {
        return User.create({
            name:name,
            email:email,
            phonenumber:phone,
            message:message
        }, {transaction: t});
       }).then(function() {
            // req.flash('messgesent', 'Message sent!');
            return res.redirect('/');
        });
     });






module.exports = router;
