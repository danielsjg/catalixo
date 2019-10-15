const Deposito = require('../models/Deposito');

function validar(depositos, lat, long) {
    
    var dep = [];

    for (i in depositos) {
        let latitude = depositos[i].latitude;
        let longitude = depositos[i].longitude;
        
        if (((lat - latitude >= -0.25 && lat - latitude <= 0.25) &&
            (long - longitude >= -0.25 && long - longitude <= 0.25))
            || (lat == 0 && long == 0)) {
                dep.push(depositos[i]);
        }

    }

    return dep;
}

module.exports = {

    async index(req, res) {
        var { tipo } = req.query;
        var { lat } = req.query;
        var { long } = req.query;
        
        var depositos = await Deposito.find({ tipos: tipo });

        depositos = validar(depositos, lat, long);

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