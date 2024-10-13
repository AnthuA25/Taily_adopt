const { initResponse } = require("../helper");
const Pet = require('../models/Pet');
const FollowUp = require('../models/FollowUp');

const createPet = async (data, user) => {
    const res = initResponse()

    const { name, description, gender, type, location, photo_url } = data
    const { user_id } = user

    if(!name || !description || !gender || !type || !location || !photo_url || !user_id){
        res.error = "Required fields are missing";
        return res;
    }

    const createAnnouncement = await Pet.create({ ...data, user_id})
    
    res.success = true
    res.data = data
    return res;
}

const getAllFollowUps = async (user) => {
    const res = initResponse()

    const { user_id } = user

    const getFollowUps = await FollowUp.findAll({ where: { user_id }})

    res.success = true;
    res.data = getFollowUps
    return res;
}

const getAllAnnouncement = async (user) => {
    const res = initResponse()

    const { user_id } = user

    const getAnnouncement = await Pet.findAll({ where: { user_id }})

    res.success = true;
    res.data = getAnnouncement
    return res;
}

const getOneAnnouncement = async ( pet_id )  => {
    const res = initResponse()

    const getOneAnnouncement = await Pet.findOne({ where: { pet_id }})

    res.success = true;
    res.data = getOneAnnouncement
    return res;
}

module.exports = { createPet, getAllFollowUps, getAllAnnouncement, getOneAnnouncement }