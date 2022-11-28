const{Schema,model}=require("mongoose");
const reservaSchema = new Schema({
   fechaentrada:Date,
   fechasalida:Date,
   cantidaddenoches:Number,
   fechareserva:Date,
   totalReserva:Number,
   user:[{
    type:Schema.type.Number,
    ref:`user`
   }],
   habitacion:[{
    type:Schema.type.Number,
    ref:`Habitacion`
    
   }]
})

module.exports=model("reserva",reservaSchema);