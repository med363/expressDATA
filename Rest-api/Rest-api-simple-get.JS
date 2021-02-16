/*04/02/2020*/ 
const express =require('express')
// const{mongodb,MongoClient}=require('mongodb')
const app=express()
app.use(express.json())
var tab=[{name:'amine',
age:22,
job:'student'},
{name:'ali',
age:22,
job:'hackers'},
{name:'ahmed',
age:22,
job:'fullStack'}]
app.get('/',(req,res)=>{
res.send(tab)});
app.get('/:name',(req,res)=>{
    let param=req.params.name;
    let filtrage=tab.filter(e=>e.name===param)
    res.send(filtrage)
})
app.listen(3000,(err)=>{
    if (err) console.log('server not run')
    else console.log('server running on 3000')
})