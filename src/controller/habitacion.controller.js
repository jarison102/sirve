const Habitacion=require('../model/Habitacion');

exports.obtener = async (req, res) => {
    try {
        const habitaciones=await Habitacion.find();
        res.status(200).json(habitacion);
    } catch (error) {
       res.status(500).json(error);
    }
}