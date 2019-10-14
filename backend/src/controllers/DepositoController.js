const Deposito = require('../models/Deposito');

module.exports = {

    async index(req, res) {
        const { tipo } = req.query;
        
        const depositos = await Deposito.find({ tipos: tipo });

        return res.json(depositos);
    },

    async store(req, res) {
        const { nome } = req.body;
        const { tipos } = req.body;
        const { latitude } = req.body;
        const { longitude } = req.body;

        const deposito = await Deposito.create({ nome, tipos, latitude, longitude });

        return res.json(deposito);
    }
    
};