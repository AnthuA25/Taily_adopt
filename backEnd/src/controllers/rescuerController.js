const { createPet, getAllFollowUps, getAllAnnouncement, getOneAnnouncement, delelePet, updatePet } = require("../services/rescuerServices")

const newPetAnnouncement = async (req, res) => {
    try {
        const newPet = await createPet(req.body, req.user)
        if(!newPet.success){
            res.status(400).json(newPet);
            return;
        }
        res.status(201).json(newPet);

    } catch (error) {
        console.log('error', error)
        res.status(500).json({sucess: false, error: "internal server error"})
    }
}

const followUps = async (req, res) => {
    try {
        const data = await getAllFollowUps(req.user)
        if(!data.success){
            res.status(400).json(data);
            return;
        }
        res.status(200).json(data);
    } catch (error) {
        console.log('error', error)
        res.status(500).json({sucess: false, error: "internal server error"})
    }
}

const announcements = async (req, res) => {
    try {
        const data = await getAllAnnouncement(req.user)
        if(!data.success){
            res.status(400).json(data);
            return;
        }
        res.status(200).json(data);
    } catch (error) {
        console.log('error', error)
        res.status(500).json({sucess: false, error: "internal server error"})
    }
}

const getAnAnnouncements = async (req, res) => {
    try {
        const { pet_id } = req.params
        const data = await getOneAnnouncement(pet_id)
        if(!data.success){
            res.status(400).json(data);
            return;
        }
        res.status(200).json(data);
    } catch (error) {
        console.log('error', error)
        res.status(500).json({sucess: false, error: "internal server error"})
    }
}

const deleteAPet = async (req, res) => {
    try {
        const { pet_id } = req.params
        const data = await delelePet(pet_id)
        if(!data.success){
            res.status(400).json(data);
            return;
        }
        res.status(200).json(data);
    } catch (error) {
        console.log('error', error)
        res.status(500).json({sucess: false, error: "internal server error"})
    }
};

const updateAPet = async (req, res) => {
    try {
        const { pet_id } = req.params
        const data = await updatePet(pet_id, req.body)
        if(!data.success){
            res.status(400).json(data);
            return;
        }
        res.status(200).json(data);
    } catch (error) {
        console.log('error', error)
        res.status(500).json({sucess: false, error: "internal server error"})
    }
};

module.exports = { newPetAnnouncement, announcements, followUps, getAnAnnouncements, deleteAPet, updateAPet }