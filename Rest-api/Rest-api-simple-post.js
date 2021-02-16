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
console.log('initial tab',tab)
app.post('/',(req,res)=>{
let arms=req.body
tab.push(arms)
res.send(tab)
console.log('new tab value',tab)});
app.listen(3000,(err)=>{
if (err) console.log('ree faled')
else console.log('server run on 3000')} )