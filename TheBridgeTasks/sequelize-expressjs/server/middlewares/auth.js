const Member = require("../models/Members");

const authMiddleware = async (req, res, next) => {
    const userKey = req.headers.llave;

    if(!userKey){
        res.status(401).send("Missing auth header");
        return;
    }

    const checkUser = await Member.findByPk(userKey);
    if (!checkUser){
        res.status(401).send("Invalid auth user");
        return;
    }

    console.log("SE EJECUTA EL MIDDLEWATE", checkUser.dataValues);
    req.user = checkUser.dataValues;

    next()
};

exports.authMiddleware = authMiddleware;