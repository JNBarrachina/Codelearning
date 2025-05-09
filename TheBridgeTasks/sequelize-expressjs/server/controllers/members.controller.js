const Member = require("../models/Members");

const addMember = async (req, res) => {
    const newMember = req.body.name;
    const createdMember = await Member.create({
        name: newMember, 
        registration_date: new Date()
    });

    console.log(`Bienvenido, ${newMember}`)

    res.send({id: createdMember.id});
}

exports.addMember = addMember;
