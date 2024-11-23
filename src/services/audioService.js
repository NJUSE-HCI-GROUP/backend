const Audio = require('../models/audio');

class AudioService {
    async createAudio(name, path) {
        const audio = new Audio({
            name,
            path
        });
        return await audio.save();
    }

    async getAudioById(id) {
        return await Audio.findById(id);
    }

    async getAudioByName(name) {
        return await Audio.findOne({
            name
        });
    }

    async updateAudio(id, name, path) {
        const audio = await Audio.findById(id);
        if (!audio) {
            throw new Error('Audio not found');
        }
        audio.name = name;
        audio.path = path;
        return await audio.save();
    }

    async deleteAudio(id) {
        return await Audio.findByIdAndDelete(id);
    }

    async listAudios() {
        return await Audio.find();
    }

    
}