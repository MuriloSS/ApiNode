import express from "express";

const app = express();
const PORT = 3000 | process.env.PORT;



app.get("/ola", (req, res)=>{
    res.send("<h1>Elikaaaaaaaaas, vc é fogo </h1>", );
});

app.listen(PORT, ()=>{
    console.log("Oláaa");
    
});
