const express=require('express');

let database=[
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
    const user=database.find(user=>user.id===Number.parseInt(req.params.id));
    if(!user){
       return res.status(404).json({message:"user not found"});
    }
    res.status(200).json(user);
});

app.post("/user",(req,res)=>{
    const body=req.body;
    database.push(body);
    res.status(201).json({message:`user created successfully`});
});

 app.delete("/user/:id",(req,res)=>{
    const id=Number.parseInt(req.params.id);
    const user=database.find(user=>user.id===id);
    if(!user){
        return res.status(404).json({message:`There is no user with id ${id}`});
    }
    database=database.filter(user=>user.id!==id);
    res.status(202).send();
});
app.put("/user/:id",(req,res)=>{
    const id=Number.parseInt(req.params.id);
    const body=req.body;
    const user=database.find(user=>user.id===id);
    if(!user){
        return res.status(404).json({message:`There is no user with id ${id}`});
    }
    const users=database.filter(user=>user.id!==id);
    users.push(body);
    database=users;
    res.status(200).json({message:`user updated successfully`});
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
    });