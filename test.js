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
 app.get("/user/:id",(req,res)=>{
    const user=database.find(user=>user.id===req.params.id);
    if(!user){
        res.status(404).json({message:"user not found"});
    }
    res.status(200).json(user);
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    });