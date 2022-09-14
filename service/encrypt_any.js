const { bcrypt } = require("../modules/module")

module.exports.encrypt = (pw) => {
    return bcrypt.hashSync(pw, 10)
}

module.exports.compare = (pw, encryptpw) => {
    return bcrypt.compareSync(pw, encryptpw, 10)
}