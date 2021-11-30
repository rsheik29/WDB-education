const express = require("express");
const router = express.Router();
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const User = require('../model/UserSchema')

router.get('/list', auth, async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        res.json({ shoppinglist: user.shoppinglist});
      } catch (e) {
        res.send({ message: "Error in Fetching user" });
      }
})

router.post('/add', auth, async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        user.shoppinglist.push(req.body.item);
        await user.save();
        res.json({ shoppinglist: user.shoppinglist});
    } catch (e) {
        res.send({ message: "Error in Fetching user" });
    }
})

router.delete('/delete', auth, async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        const index = user.shoppinglist.indexOf(req.body.item);
        if (index > -1) {
            user.shoppinglist.splice(index, 1);
        }
        await user.save();
        res.json({shoppinglist: user.shoppinglist});
    } catch (e) {
        res.send({ message: "Error in Fetching user" });
    }
})

module.exports = router;