const express=require('express');

const database=[
    {
        name:"Kebede",
        id:1,
        email:"kebede@gmail.com"
    },
    {
        name:"Abebe",
        id:2,
        email:"abebe@gmail.com"
    },
    {
        name:"Ketema",
        id:3,
        email:"ketema@gmail.com"
    }
];

const app=express();

app.use(express.json());

app.get("/user",(req,res)=>{
    res.status(200).json(database);
})
 
app.listen(3000,()=>{
    console.log("server is running on port 3000");
    });