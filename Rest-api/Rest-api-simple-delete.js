const express=require('express')

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
app.put('/amine2/:name',(req,res)=>{
    let aminebl = req.params.name
    tab=tab.filter(e=>e.name!==aminebl.name)
    res.send(tab)
})
app.listen(3000,(err)=>{
    if (err) console.log('err!!!!!!!!')
    else console.log('server run on 3000')
})