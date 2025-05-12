const Member = require("../models/Members");
const bcryptjs = require("bcryptjs");

const userLogin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const createdMember = await Member.findOne({
        where: {username: username}
    });
    if (!createdMember){
        res.status(400).send("El usuario no existe");
        return;
    }

    const passwordMatch = bcryptjs.compareSync(password, createdMember.password);
    if (!passwordMatch){
        res.status(400).send("Contraseña incorrecta");
        return;
    }

    res.send(`Bienvenido, ${createdMember.name}`);
}

const addMember = async (req, res) => {
    const hashedPassword =  bcryptjs.hashSync(req.body.password);

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
