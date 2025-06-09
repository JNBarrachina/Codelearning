const {User} = require("../models/User");
const bcryptjs = require("bcryptjs");

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

const loginUser = async (req, res) => {
    // #swagger.tags = ['Users']

    const {username, password} = req.body;

    const existingUser = await User.findOne(
        {username: username}
    );
    if (!existingUser){
        res.status(400).send({msg: "Usuario o contraseña incorrectos"});
        return;
    }

    const passwordMatch = bcryptjs.compareSync(password, existingUser.password);
    if (!passwordMatch){
        res.status(400).send({msg: "Usuario y contraaseña incorrectos"});
        return;
    }
    else{
        const accessToken = jwt.sign({ userId: existingUser._id}, JWT_SECRET);

        res.status(201).send({accessToken});
    }
}

const registerUser = async (req, res) => {
    // #swagger.tags = ['Users']

    const {name, username, password, email, country} = req.body
    const hashedPassword =  bcryptjs.hashSync(password);

    const checkUsername = await User.findOne(
        {username: username}
    );
    if (checkUsername){
        res.status(400).send({msg: "El nombre de usuario ya está siendo utilizado"});
        return;
    }

    try {
        const createdMember = new User(
            {
                name: name,
                username: username,
                password: hashedPassword,
                email: email,
                country: country
            }
        )

        await createdMember.save();
        res.status(204).send({msg: "Usuario registrado"});
    } catch (error) {
        console.log(error);
        res.status(400).send({msg: "Unexpected error"});
    }
}

module.exports = { loginUser, registerUser };