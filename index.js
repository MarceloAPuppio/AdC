import './DataBase/mongoDB.js'
import Autorizaciones from "./models/autorizaciones.model.js";
import express from 'express';
const app=express()
app.use(express.json())

app.listen(process.env.PORT || 5001,(err)=>{
    console.log('conectado success')
})
app.post('/autorizaciones',async ({body}, res)=>{
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
// const auth = new Autorizaciones({
//     name:"pepe",
//     // descripcion:[{cod:43144,nombre:"sal fina seca", cant:50}],
//     pedido: 123456,
//     // transporte:"Demirjián",
//     chofer:"PabloK",
//     patente:"A0123AE/df123ds"    
// })

// await auth.save()