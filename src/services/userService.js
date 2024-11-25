const User = require('../models/user');


class UserService {
    async createUser(name, password, email, photo_path) {
        const user = new User({
            name,
            password,
            email,
            photo_path
        });
        return await user.save();
    }

    async getUserById(id) {
        return await User.findById(id);
    }

    async getUserByName(name) {
        return await User.findOne({
            name
        });
    }

    async updateUser(id, name, password, email, photo_path) {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        user.name = name;
        user.password = password;
        user.email = email;
        user.photo_path = photo_path;
        return await user.save();
    }

    async deleteUser(id) {
        return  await User.findByIdAndDelete(id);
    }

    async listUsers() {
        return await User.find();
    }

    async validateUser(name, password) {
        const user = await User.findOne({
            name,
            password
        });
        return user;
    }
    async login(name, password) {
        const user = await User
            .findOne({
                name,
                password
            });
        return user;
    }

}

module.exports = new UserService();