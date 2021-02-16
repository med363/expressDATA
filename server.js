const express=require('express')
const app=express()
const hbs=require('hbs')
// app.use(date=(req,res,next)=>{
//     let requistAt=new Date();
//     console.log(requistAt);
//     next()
// })

app.set('view engine',hbs)
app.get('/connected_users',(req,res)=>{
    // console.log(req.params)
     res.render('FileHtml.hbs',{name:"amine"})
})
// app.get('/home/main',(req,res)=>{
//     res.sendFile(__dirname+'/index.html')
// })
// app.get('/home',(req,res)=>{
//     res.send('<h1>Welcome to my first step in express framework nodeJs</h1>')
// })
app.listen(3001,(error)=>{if (error) 
console.log("server not running on 3001")
else 
console.log("server running on 3001")}
)
