const Member = require("../models/Members");
const usersRepository = require("../repositories/users.repository");

const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json") ["development"];

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token){
        res.status(401).send("Missing auth header")
        return;
    }

    const payload = jwt.verify(token, jwt_secret);
    const userId = payload.id;

    req.user = checkUser.dataValues;
    next();
};

exports.authMiddleware = authMiddleware;