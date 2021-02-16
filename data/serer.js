const express =require('express')
const {MongoClient,ObjectID}=require('mongodb')
const assert = require('assert')
applicationCache.use(express.json())

const Mongo_url="mongodb://localhost:27017"
const dataBase="first api"
MongoClient.connect(Mongo_url,(er,client)=>{
    assert.equal(er,null,'data failed')
    const db=client.db(dataBase)
    app.post('/',(req,res)=>{
   let n=req.body
   db.collection('amine').insertOne(n,(err,data)=>{
       if (err) res.send('er!!!!!!!!!!!!!')
       else res.send(data)
   })     
    })
})  
app.listen(3000,(err)=>{
    if (err) console.log("er!!!!!!!!!")
    console.log("server run on 3000")
})