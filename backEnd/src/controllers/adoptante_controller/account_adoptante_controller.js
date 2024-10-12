import Account from '../models/a.js';

const getListPets = async(req, res) => {

    const petsList = await Account.findAll()
}