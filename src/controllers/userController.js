const UserService = require('../services/userService');

exports.createUser = async (req, res) => {
    const { name, password, email, photo_path } = req.body;
    try {
        const user = await UserService.createUser(name, password, email?? null, photo_path?? null);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserService.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.getUserByName = async (req, res) => {
    const { name } = req.params;
    try {
        const user = await UserService.getUserByName(name);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, password, email, photo_path} = req.body;
    try {
        const user = await UserService.updateUser(id, name, password, email, photo_path?? null);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await UserService.deleteUser(id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}


exports.listUsers = async (req, res) => {
    try {
        const users = await UserService.listUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.validateUser = async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await UserService.validateUser(name, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
