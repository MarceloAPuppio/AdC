import './DataBase/mongoDB.js'
import express from 'express';
import autorizaciones from './routes/autorizaciones.js'
const app=express()
app.use(express.json())


app.listen(process.env.PORT || 5001,(err)=>{
    console.log('conectado success')
})
app.use('/autorizaciones', autorizaciones)
