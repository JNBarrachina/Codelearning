const Member = require("../models/Members");

async function findMember(memberId) {
    return await Member.findByPk(memberId); 
}

module.exports = {findMember};