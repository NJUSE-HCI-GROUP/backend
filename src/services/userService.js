const User = require('../models/user');


class UserService {
    async createUser(name, password) {
        const user = new User({
            name,
            password
        });
        return await user.save();
    }
}

module.exports = new UserService();