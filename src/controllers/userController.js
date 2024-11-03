const UserService = require('../services/userService');

exports.createUser = async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await UserService.createUser(name, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
