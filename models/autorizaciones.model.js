import {mongoose} from 'mongoose'

const autorizacionSchema = new mongoose.Schema({
    fecha: { type: Date, default: Date.now },
    name:{ type: String, default: "" },
    descripcion :{type:   
        [{
            cod : Number,
            nombre: String,
            cant : Number
             }], required:true
    } ,
    pedido: Number,
    transporte:String,
    chofer: String,
    patente:String,

  });
//model
const Autorizaciones = mongoose.model('Autorizacion', autorizacionSchema);
export default Autorizaciones