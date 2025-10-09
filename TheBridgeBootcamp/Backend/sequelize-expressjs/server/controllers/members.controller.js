const Member = require("../models/Members");
const bcryptjs = require("bcryptjs");

const booksRepository = require("../repositories/books.repository");
const usersRepository = require("../repositories/users.repository");

const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json") ["development"];

const userLogin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingMember = await Member.findOne({
        where: {username: username}
    });
    if (!existingMember){
        res.status(400).send("El usuario no existe");
        return;
    }

    const passwordMatch = bcryptjs.compareSync(password, existingMember.password);
    if (!passwordMatch){
        res.status(400).send("Contraseña incorrecta");
        return;
    }

    const token = jwt.sign({ id: existingMember.id},jwt_secret);

    res.status(201).send({token: token});
}

const addMember = async (req, res) => {
    const hashedPassword =  bcryptjs.hashSync(req.body.password);

    const checkMember = await Member.findOne({
        where: {username: req.body.username}
    });
    if (checkMember){
        res.status(400).send("El nombre de usuario ya está siendo utilizado");
        return;
    }

    const createdMember = await Member.create({
        name: req.body.name, 
        registration_date: new Date(),
        username: req.body.username,
        password: hashedPassword
    });

    res.send(`Nuevo miembro: ${createdMember.username}`);
}

exports.userLogin = userLogin;
exports.addMember = addMember;
