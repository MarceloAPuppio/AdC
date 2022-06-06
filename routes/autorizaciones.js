import {Router} from 'express'
import Autorizaciones from "../models/autorizaciones.model.js";

const router = Router()

router.use((req, res, next)=>{
    console.log('Time :', Date.now())
    next()
})
router.post('/',async ({body}, res)=>{
    const auth = new Autorizaciones({
        name:body.name,
        descripcion:body.descripcion||"[]",
        pedido: parseInt(body.pedido),
        transporte:body.transporte,
        chofer:body.chofer,
        patente:body.patente
    })
    try {
        console.log(body)
        let resp =await auth.save()
        console.log(resp)
        res.send(resp)
        
    } catch (error) {
        console.log(error)
    }
})
router.get('/',async (req,res)=>{
    let autorizaciones = await Autorizaciones.find()    
    res.send(autorizaciones)
})

export default router